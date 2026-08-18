/**
 * videoLoader.js — the ONLY data access layer for videos.
 *
 * Videos come from src/data/videos.json, a hand-maintained index:
 *
 *   {
 *     id: number,
 *     title: string,            // Tamil or English
 *     type: 'video' | 'live',
 *     parts: [{ part_no, ytId }]  // every YouTube part, in order
 *   }
 *
 * This module normalizes that JSON into the shape the UI components
 * expect (titleEn/titleTa, category, sourceType, youtubeId, …), so pages
 * and components never read the JSON directly and both "video" and "live"
 * entries render as responsive YouTube embeds built from each part's ytId.
 *
 * Components must only use the helpers in this module. When a backend
 * lands, this file becomes the seam: swap the JSON import for
 * GET /api/videos/ and the UI keeps working unchanged.
 */

import videosJson from '../../data/videos.json';

const TAMIL_RE = /[\u0B80-\u0BFF]/;

/** Lowercase ASCII slug for routing (Tamil-only titles fall back by id). */
function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\x00-\x7F]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Normalize one JSON entry into the video shape used across the UI.
 * Both language fields keep the single title, so getVideoTitle() shows it
 * in either language exactly like the previous file-based content did.
 */
function normalizeVideo(item) {
  const title = String(item.title ?? '').trim();
  const parts = Array.isArray(item.parts) ? item.parts : [];
  const youtubeId = parts[0]?.ytId || '';

  let series = '';
  let episode = '';
  if (parts.length > 1) {
    series = title;
    episode = `${parts.length} Parts`;
  } else if (/bible\s*study/i.test(title)) {
    series = 'Bible Study';
  }

  return {
    id: item.id,
    slug: slugify(title) || `video-${item.id}`,
    titleEn: title,
    titleTa: title,
    descriptionEn: '',
    descriptionTa: '',
    series,
    seriesEn: series,
    seriesTa: series,
    episode,
    episodeTa: episode,
    episodeEn: episode,
    category: 'General',
    sourceType: 'youtube',
    source: '',
    youtubeId,
    parts,
    thumbnail: '',
    date: '',
    duration: null,
    fileName: '',
    filePath: '',
    sizeBytes: 0,
    type: item.type === 'live' ? 'live' : 'video',
  };
}

/** All videos, normalized, in JSON order (stable ids + slugs). */
const videos = videosJson.map(normalizeVideo);

// Slugs must be unique for routing — dedupe with a numeric suffix in case
// two entries slugify identically (e.g. a Tamil title vs. a "video N" one).
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

/** All videos, in stable JSON order. */
export function getVideos() {
  return videos;
}

/** All unique categories (series names + 'General'), in display order. */
export function getCategories() {
  const seen = [];
  for (const video of videos) {
    if (!seen.includes(video.category)) seen.push(video.category);
  }
  return seen;
}

/** Find a single video by its slug. */
export function getVideoBySlug(slug) {
  return videos.find((video) => video.slug === slug) ?? null;
}

/** The featured video (used on the home page preview). */
export function getLatestVideo() {
  return videos[0] ?? null;
}

/**
 * Filter + search across all available metadata: titles, series, episode,
 * category, description and the source file name.
 */
export function filterVideos({ query = '', category = 'All' }) {
  const q = query.trim().toLowerCase();
  return videos.filter((video) => {
    const matchesCategory = category === 'All' || video.category === category;
    if (!matchesCategory) return false;
    if (!q) return true;
    const haystack = [
      video.titleEn,
      video.titleTa,
      video.series,
      video.seriesEn,
      video.seriesTa,
      video.episode,
      video.episodeEn,
      video.episodeTa,
      video.category,
      video.descriptionEn,
      video.descriptionTa,
      video.fileName,
    ];
    return haystack.some((value) => String(value ?? '').toLowerCase().includes(q));
  });
}

/**
 * Related videos for a detail page — same series only, never including
 * the current video. Cross-series videos are intentionally excluded
 * so each series/folder stays isolated.
 */
export function getRelatedVideos(slug, limit = 3) {
  const current = videos.find((video) => video.slug === slug);
  if (!current) return [];
  return videos
    .filter(
      (video) => video.slug !== slug && video.series && video.series === current.series,
    )
    .slice(0, limit);
}

/* ------------------------------------------------------------------
   Language-aware accessors (local content is often Tamil-only, so these
   always fall back to whatever text exists).
------------------------------------------------------------------ */

export function getVideoTitle(video, lang) {
  const title = lang === 'ta' ? video.titleTa : video.titleEn;
  return title || video.titleEn || video.titleTa || '';
}

export function getSeriesLabel(video, lang) {
  if (!video.series) return '';
  return lang === 'ta' ? video.seriesTa || video.seriesEn : video.seriesEn || video.seriesTa;
}

export function getEpisodeLabel(video, lang) {
  if (!video.episode) return '';
  return lang === 'ta' ? video.episodeTa || video.episodeEn : video.episodeEn || video.episodeTa;
}

export function getVideoDescription(video, lang) {
  const description = lang === 'ta' ? video.descriptionTa : video.descriptionEn;
  return description || video.descriptionEn || video.descriptionTa || '';
}

/** MIME type for a local video source URL (by extension). */
export function getVideoMime(source) {
  const ext = String(source).split('?')[0].split('.').pop().toLowerCase();
  const map = {
    mp4: 'video/mp4',
    webm: 'video/webm',
    mov: 'video/quicktime',
    ogg: 'video/ogg',
    ogv: 'video/ogg',
    m4v: 'video/mp4',
    '3gp': 'video/3gpp',
  };
  return map[ext] || 'video/mp4';
}

/* ------------------------------------------------------------------
   YouTube URL builders — the only place YouTube URL formats live.
------------------------------------------------------------------ */

/** Standard thumbnail served by YouTube (no local downloads needed). */
export function getYouTubeThumbnail(youtubeId) {
  return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
}

/** Embed URL used by the responsive <iframe> player. */
export function getYouTubeEmbedUrl(youtubeId) {
  return `https://www.youtube.com/embed/${youtubeId}`;
}

/** "Watch on YouTube" link — opens the video's own page in a new tab. */
export function getYouTubeWatchUrl(youtubeId) {
  return `https://www.youtube.com/watch?v=${youtubeId}`;
}
