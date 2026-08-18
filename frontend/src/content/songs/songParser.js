/**
 * songParser.js — turns a raw song .txt file into a normalized song object.
 *
 * PURE / NODE-SAFE: this module does no Vite or browser work, so the same
 * parser can be reused by the Vite content plugin (build time) and, later,
 * by backend import tooling (Django admin migration). It never rewrites the
 * source files — it only reads them.
 *
 * Normalized song shape (matches the future API contract):
 *   {
 *     id, slug, songNumber,
 *     titleEn, titleTa,
 *     category,
 *     lyricsEn: [{ label, labelEn, labelTa, lines }],
 *     lyricsTa: [{ ... same sections ... }],
 *     source,           // relative path to the source file
 *     fileName,
 *   }
 *
 * The real content in `Song Lyrics/` is Tamil-only. We never invent English
 * translations — when English is missing, titleEn falls back to the Tamil
 * title and lyricsEn stays empty (the UI falls back to the Tamil lyrics).
 */

const NUMBERED_LINE = /^(\d{1,2})[.)]\s*(.*)$/;
const DASH = /^(.*?)\s*[–—-]\s*/;

/** Only meaningful text lines (trimmed, non-empty). */
function cleanLines(text) {
  return String(text)
    .replace(/\r\n?/g, '\n')
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
}

/**
 * Sections in this codebase are `{ label, labelEn, labelTa, lines }`.
 * `label` is kept for backwards compatibility; the renderer picks
 * labelEn/labelTa by the active language.
 */
function makeSection(kind, lines, number) {
  if (kind === 'chorus') {
    return { label: 'Chorus', labelEn: 'Chorus', labelTa: 'பல்லவி', lines };
  }
  if (kind === 'verse') {
    return {
      label: `Verse ${number}`,
      labelEn: `Verse ${number}`,
      labelTa: `சரணம் ${number}`,
      lines,
    };
  }
  return { label: 'Song', labelEn: 'Song', labelTa: 'பாடல்', lines };
}

/**
 * When a song repeats its chorus after the last verse (e.g. file 2), those
 * trailing lines currently sit at the end of the last verse. If the trailing
 * block is composed entirely of chorus lines, split it back out so it
 * renders as its own பல்லவி section. Requires >= 2 matched lines to avoid
 * over-splitting on a single common line.
 */
function splitTrailingChorus(verseLines, introLines) {
  if (!introLines.length || !verseLines.length) {
    return { verse: verseLines, chorus: null };
  }
  const introSet = new Set(introLines.map((line) => line.trim()));
  let idx = verseLines.length;
  while (idx > 0 && introSet.has(verseLines[idx - 1].trim())) idx -= 1;
  const chorus = verseLines.slice(idx);
  if (chorus.length < 2 || idx === verseLines.length) {
    return { verse: verseLines, chorus: null };
  }
  return { verse: verseLines.slice(0, idx), chorus };
}

/**
 * Parse song text into sections.
 *
 * Structure rules (derived from the real files):
 *  - Lines before the first numbered marker ("1." / "2." …) form the intro
 *    (பல்லவி / Chorus) when numbered verses exist, otherwise the whole song.
 *  - Numbered markers start a verse (சரணம்) section; the marker text is the
 *    first line of that verse.
 *  - If there is no numbering at all, the whole file is one section (பாடல்).
 *  - Nothing is invented or rewritten: every original line is preserved.
 */
export function parseSongText(text) {
  const lines = cleanLines(text);

  const intro = [];
  const verses = [];
  let current = null;

  for (const line of lines) {
    const match = line.match(NUMBERED_LINE);
    if (match) {
      current = { number: parseInt(match[1], 10), lines: [] };
      const rest = match[2].trim();
      if (rest) current.lines.push(rest);
      verses.push(current);
    } else if (current) {
      current.lines.push(line);
    } else {
      intro.push(line);
    }
  }

  const sections = [];

  if (verses.length > 0) {
    if (intro.length) sections.push(makeSection('chorus', intro));
    verses.forEach((verse, i) => {
      let { verse: verseLines, chorus } = splitTrailingChorus(verse.lines, intro);
      if (i === verses.length - 1 && chorus) {
        sections.push(makeSection('verse', verseLines, verse.number));
        sections.push(makeSection('chorus', chorus));
      } else {
        sections.push(makeSection('verse', verse.lines, verse.number));
      }
    });
  } else {
    sections.push(makeSection('song', intro));
  }

  return { sections, firstLine: lines[0] || '' };
}

/** Title = first meaningful line, cut at a dash when present. */
export function extractTitle(firstLine) {
  const match = DASH.exec(firstLine || '');
  if (match && match[1].trim()) return match[1].trim();
  return String(firstLine || '').replace(/[.,;:!?]+$/, '').trim();
}

/** Trailing number in the filename ("Song Lyrics - 7" → "7"). */
export function extractFileNumber(fileName) {
  const base = String(fileName).replace(/\.[^.]+$/, '');
  const match = base.match(/(\d+)\s*$/);
  return match ? match[1] : '';
}

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[^\x00-\x7F]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Build the final normalized song object from raw text + file metadata.
 * `index` is the 0-based position in the sorted file list (used for ids).
 */
export function parseSong(text, { fileName, index, relPath }) {
  const { sections, firstLine } = parseSongText(text);

  const fileNumber = extractFileNumber(fileName);
  const number = fileNumber || String(index + 1);
  const slugFromName = slugify(fileName.replace(/\.[^.]+$/, ''));
  const slug =
    (fileNumber ? `song-${fileNumber}` : slugFromName) || `song-${index + 1}`;

  const titleTa = extractTitle(firstLine);
  const titleEn = titleTa; // real content is Tamil-only; English falls back

  return {
    id: `song-${number}`,
    slug,
    songNumber: number,
    titleEn,
    titleTa,
    category: 'General',
    // Tamil sections are the source of truth. lyricsEn intentionally empty —
    // the UI falls back to the Tamil lyrics until real English exists.
    lyricsTa: sections,
    lyricsEn: [],
    source: relPath || '',
    fileName,
  };
}
