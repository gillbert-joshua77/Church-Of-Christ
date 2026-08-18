/**
 * videoParser.js — discovers and normalizes the real content in the root
 * `Video/` folder.
 *
 * PURE / NODE-SAFE: used by the Vite content plugin (build time) so the
 * website adapts to whatever is in the folder. It never moves, renames or
 * rewrites the original files.
 *
 * Normalized video shape (matches the future API contract):
 *   {
 *     id, slug,
 *     titleEn, titleTa,
 *     descriptionEn, descriptionTa,   // empty today (not invented)
 *     series, seriesEn, seriesTa,     // top-level folder, '' for standalone
 *     episode, episodeTa, episodeEn,  // parsed from the filename, '' if none
 *     category,                       // series name, or 'General'
 *     sourceType,                     // 'local' | 'youtube' | 'unsupported'
 *     source,                         // /content/videos/… URL for local files
 *     youtubeId,                      // only for YouTube entries
 *     thumbnail,                      // /content/videos/… or /thumbnails/…
 *     date, duration,                 // unknown for local files ('' / null)
 *     fileName, filePath, sizeBytes,
 *   }
 *
 * Folder structure supported:
 *   Video/
 *   ├── <series folder>/           → each folder is a series
 *   │   ├── Episode 01.mp4
 *   │   └── …
 *   └── standalone.mp4             → no series (category 'General')
 */

import fs from 'node:fs';
import path from 'node:path';

export const SUPPORTED_VIDEO_EXT = new Set([
  'mp4',
  'webm',
  'mov',
  'ogg',
  'ogv',
  'm4v',
  '3gp',
]);
const UNSUPPORTED_VIDEO_EXT = new Set(['avi', 'mkv', 'wmv', 'flv', 'ts', 'mpeg', 'mpg']);
const IMAGE_EXT = new Set(['jpg', 'jpeg', 'png', 'webp', 'gif']);

const TAMIL_RE = /[\u0B80-\u0BFF]/;
const SEP_CHARS = new Set(['-', '–', '—', '_', '.']);

/* ------------------------------------------------------------------
   Filename helpers
------------------------------------------------------------------ */

function clean(value) {
  return String(value)
    .replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE00}-\u{FE0F}\u{200D}]/gu, '')
    .replace(/[.…_]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Split a bilingual "Tamil part - English part" name. Uses the LAST
 * separator that has Tamil text before it and ASCII letters after it, so
 * punctuation inside the Tamil part ("பாகம்.2") is left alone.
 */
export function splitBilingual(value) {
  const str = String(value ?? '');
  const hasTamil = TAMIL_RE.test(str);
  const hasEnglish = /[A-Za-z]/.test(str);
  if (!hasTamil) return { ta: '', en: str };
  if (!hasEnglish) return { ta: str, en: '' };

  let bestStart = -1;
  let bestEnd = -1;
  for (let i = 0; i < str.length; i += 1) {
    if (!SEP_CHARS.has(str[i])) continue;
    let start = i;
    let end = i + 1;
    while (start > 0 && str[start - 1] === ' ') start -= 1;
    while (end < str.length && (str[end] === ' ' || SEP_CHARS.has(str[end]))) end += 1;
    const before = str.slice(0, start);
    const after = str.slice(end);
    if (TAMIL_RE.test(before) && /[A-Za-z]/.test(after)) {
      bestStart = start;
      bestEnd = end;
    }
    i = end - 1;
  }

  if (bestStart >= 0) {
    return { ta: str.slice(0, bestStart), en: str.slice(bestEnd) };
  }
  return { ta: str, en: '' };
}

/** "…பாகம்.2" or "…Part 2" → { num, ta: 'பாகம் 2', en: 'Part 2' } */
export function extractEpisode(baseName) {
  const taMatch = String(baseName).match(/பாகம்\.?\s*(\d+)/);
  if (taMatch) {
    const n = taMatch[1];
    return { num: parseInt(n, 10), ta: `பாகம் ${n}`, en: `Part ${n}` };
  }
  const enMatch = String(baseName).match(/\bpart\.?\s*(\d+)\b/i);
  if (enMatch) {
    const n = enMatch[1];
    return { num: parseInt(n, 10), ta: `பாகம் ${n}`, en: `Part ${n}` };
  }
  return null;
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\x00-\x7F]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/* ------------------------------------------------------------------
   Discovery
------------------------------------------------------------------ */

function isMediaFile(fileName) {
  const ext = path.extname(fileName).toLowerCase().replace('.', '');
  return SUPPORTED_VIDEO_EXT.has(ext) || UNSUPPORTED_VIDEO_EXT.has(ext);
}

/** Collect media files under a directory (one level of nesting is enough). */
function collectMediaFiles(dir) {
  const files = [];
  let entries = [];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return files;
  }
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))) {
    const full = path.join(dir, entry.name);
    if (entry.isFile() && isMediaFile(entry.name)) files.push(full);
  }
  return files;
}

/**
 * Look for an existing thumbnail/poster image next to the video.
 * Order: same base name → thumbnail/thumb/poster/cover prefixed images.
 */
function findThumbnail(fileDir, videosRoot, baseName) {
  let entries = [];
  try {
    entries = fs.readdirSync(fileDir);
  } catch {
    return null;
  }
  const images = entries.filter((f) => IMAGE_EXT.has(path.extname(f).toLowerCase().replace('.', '')));
  if (!images.length) return null;

  const base = baseName.toLowerCase();
  const hit =
    images.find((f) => path.basename(f, path.extname(f)).toLowerCase() === base) ||
    images.find((f) => /^(thumb|thumbnail|poster|cover)[\s._-]*/i.test(f));
  if (!hit) return null;

  const rel = path.relative(videosRoot, path.join(fileDir, hit));
  return rel.split(path.sep).join('/');
}

function buildVideo({ filePath, videosRoot, seriesName, index }) {
  const fileName = path.basename(filePath);
  const ext = path.extname(fileName).toLowerCase().replace('.', '');
  const baseName = path.basename(fileName, path.extname(fileName));
  const sourceType = SUPPORTED_VIDEO_EXT.has(ext) ? 'local' : 'unsupported';

  const { ta, en } = splitBilingual(baseName);
  const titleEn = clean(en) || clean(baseName);
  const titleTa = clean(ta) || titleEn;

  const episode = extractEpisode(baseName);
  const relPath = seriesName ? `${seriesName}/${fileName}` : fileName;
  const thumbnailRel = findThumbnail(path.dirname(filePath), videosRoot, baseName);

  const { ta: sTa, en: sEn } = seriesName ? splitBilingual(seriesName) : { ta: '', en: '' };
  const seriesEn = clean(sEn) || seriesName || '';
  const seriesTa = clean(sTa) || seriesEn;

  return {
    id: `video-${index + 1}`,
    slug: slugify(titleEn) || `video-${index + 1}`,
    titleEn,
    titleTa,
    descriptionEn: '',
    descriptionTa: '',
    series: seriesName || '',
    seriesEn,
    seriesTa,
    episode: episode ? String(episode.num) : '',
    episodeTa: episode ? episode.ta : '',
    episodeEn: episode ? episode.en : '',
    category: seriesName || 'General',
    sourceType,
    source: sourceType === 'local' ? `/content/videos/${relPath.split(path.sep).join('/')}` : '',
    youtubeId: '',
    thumbnail: thumbnailRel ? `/content/videos/${thumbnailRel.split(path.sep).join('/')}` : '',
    date: '',
    duration: null,
    fileName,
    filePath,
    sizeBytes: 0,
  };
}

/**
 * Scan the `Video/` folder. Top-level media files become standalone videos
 * (listed first); top-level folders become series with their episodes
 * sorted numerically. Deterministic ordering for stable ids/slugs.
 */
export function discoverVideos(videosRoot) {
  let entries = [];
  try {
    entries = fs.readdirSync(videosRoot, { withFileTypes: true });
  } catch {
    return [];
  }
  entries.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));

  const standalone = [];
  const series = [];
  for (const entry of entries) {
    const full = path.join(videosRoot, entry.name);
    if (entry.isFile() && isMediaFile(entry.name)) {
      standalone.push(full);
    } else if (entry.isDirectory()) {
      const media = collectMediaFiles(full).sort((a, b) => {
        const ea = extractEpisode(path.basename(a));
        const eb = extractEpisode(path.basename(b));
        const na = ea ? ea.num : Number.MAX_SAFE_INTEGER;
        const nb = eb ? eb.num : Number.MAX_SAFE_INTEGER;
        if (na !== nb) return na - nb;
        return a.localeCompare(b, undefined, { numeric: true });
      });
      series.push({ name: entry.name, files: media });
    }
  }

  const videos = [];
  let index = 0;
  for (const file of standalone) {
    videos.push(
      buildVideo({ filePath: file, videosRoot, seriesName: null, index }),
    );
    index += 1;
  }
  for (const group of series) {
    for (const file of group.files) {
      videos.push(
        buildVideo({ filePath: file, videosRoot, seriesName: group.name, index }),
      );
      index += 1;
    }
  }

  // Fill sizeBytes after the fact (stat on demand keeps discovery fast).
  for (const video of videos) {
    try {
      video.sizeBytes = fs.statSync(video.filePath).size;
    } catch {
      video.sizeBytes = 0;
    }
  }

  // Slugs must be unique for routing. Real filenames sometimes repeat the
  // English part number (e.g. "…பாகம்.1 - …Part 4"), so dedupe with a
  // numeric suffix — deterministic thanks to the sorted discovery order.
  const usedSlugs = new Set();
  for (const video of videos) {
    let slug = video.slug;
    if (usedSlugs.has(slug)) {
      let n = 2;
      while (usedSlugs.has(`${slug}-${n}`)) n += 1;
      slug = `${slug}-${n}`;
    }
    usedSlugs.add(slug);
    video.slug = slug;
  }

  return videos;
}
