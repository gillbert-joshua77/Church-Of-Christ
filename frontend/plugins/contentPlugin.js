/**
 * contentPlugin.js — Vite plugin that makes the real content folders the
 * source of truth for the website.
 *
 * Content lives OUTSIDE the Vite root (project root → `Song Lyrics/` and
 * `Video/`), so it cannot be read with import.meta.glob. Instead this
 * plugin reads the folders in Node at dev/build startup and exposes the
 * normalized data to React as virtual modules:
 *
 *   virtual:content:songs   → { songs, songCategories }
 *   virtual:content:videos  → { videos, videoCategories }
 *
 * "Add a file → restart/build Vite → it appears" works automatically —
 * nothing is manually maintained.
 *
 * Local video files are NOT copied into the build (the folder is multi-GB).
 * Instead:
 *   - `vite dev`  serves them at /content/videos/… (Range-aware middleware)
 *   - `vite preview` serves them the same way (both run in Node)
 *   - static hosting (e.g. Vercel) has no Node server, so local videos show
 *     a graceful "unavailable" state until the future Django/storage phase
 *   - set KS_COPY_VIDEOS=1 on `vite build` to copy videos into dist/
 *
 * Thumbnails: if ffmpeg (+ffprobe) is available, a representative frame is
 * extracted (~15% into the video) into public/thumbnails/. Otherwise the UI
 * renders a branded CSS placeholder — never a broken image.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { parseSong } from '../src/content/songs/songParser.js';
import { discoverVideos } from '../src/content/videos/videoParser.js';

const execFileAsync = promisify(execFile);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FRONTEND_DIR = path.resolve(__dirname, '..');
const PROJECT_ROOT = path.resolve(FRONTEND_DIR, '..');
const SONGS_DIR = path.join(PROJECT_ROOT, 'Song Lyrics');
const VIDEOS_DIR = path.join(PROJECT_ROOT, 'Video');
const THUMB_DIR = path.join(FRONTEND_DIR, 'public', 'thumbnails');

const VIRTUAL_SONGS = 'virtual:content:songs';
const VIRTUAL_VIDEOS = 'virtual:content:videos';

/* ------------------------------------------------------------------
   Song discovery
------------------------------------------------------------------ */

let cachedSongs = null;

function readSongs() {
  let files = [];
  try {
    files = fs
      .readdirSync(SONGS_DIR)
      .filter((name) => /\.txt$/i.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  } catch (error) {
    console.warn(`[content-plugin] Could not read "${SONGS_DIR}": ${error.message}`);
    return [];
  }

  const songs = [];
  files.forEach((fileName, index) => {
    try {
      const text = fs.readFileSync(path.join(SONGS_DIR, fileName), 'utf8');
      const song = parseSong(text, {
        fileName,
        index,
        relPath: path.join('Song Lyrics', fileName).split(path.sep).join('/'),
      });
      songs.push(song);
    } catch (error) {
      // Never let one bad file take down the whole site.
      console.warn(
        `[content-plugin] Could not parse song "${fileName}" — skipped (${error.message})`,
      );
    }
  });
  return songs;
}

function loadSongs() {
  if (!cachedSongs) cachedSongs = readSongs();
  return cachedSongs;
}

/* ------------------------------------------------------------------
   Video discovery + thumbnails
------------------------------------------------------------------ */

let cachedVideos = null;

function loadVideos() {
  if (!cachedVideos) cachedVideos = discoverVideos(VIDEOS_DIR);
  return cachedVideos;
}

function uniqueCategories(videos) {
  const seen = [];
  for (const video of videos) {
    if (!seen.includes(video.category)) seen.push(video.category);
  }
  return seen;
}

/**
 * Extract a representative frame per local video when ffmpeg is installed.
 * Runs once per slug (idempotent — skips existing files), so restarts and
 * rebuilds are cheap. When ffmpeg is missing this is a no-op and the UI
 * falls back to a branded placeholder.
 */
async function generateThumbnails(videos) {
  let ffmpegAvailable = false;
  let ffprobeAvailable = false;
  try {
    await execFileAsync('ffmpeg', ['-version'], { windowsHide: true });
    ffmpegAvailable = true;
  } catch {
    ffmpegAvailable = false;
  }
  if (!ffmpegAvailable) {
    console.warn(
      '[content-plugin] ffmpeg not found — video thumbnails will use branded placeholders.',
    );
    return;
  }
  try {
    await execFileAsync('ffprobe', ['-version'], { windowsHide: true });
    ffprobeAvailable = true;
  } catch {
    ffprobeAvailable = false;
  }

  fs.mkdirSync(THUMB_DIR, { recursive: true });

  for (const video of videos) {
    if (video.thumbnail || video.sourceType !== 'local') continue;
    const outFile = path.join(THUMB_DIR, `${video.slug}.jpg`);
    if (fs.existsSync(outFile)) {
      video.thumbnail = `/thumbnails/${video.slug}.jpg`;
      continue;
    }
    try {
      // ~15% into the video (avoids black intros); fixed 15s without ffprobe.
      let seekSeconds = 15;
      if (ffprobeAvailable) {
        const { stdout } = await execFileAsync(
          'ffprobe',
          ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', video.filePath],
          { windowsHide: true },
        );
        const duration = parseFloat(String(stdout).trim());
        if (Number.isFinite(duration) && duration > 0) {
          seekSeconds = Math.max(1, Math.round(duration * 0.15));
        }
      }
      await execFileAsync(
        'ffmpeg',
        ['-y', '-ss', String(seekSeconds), '-i', video.filePath, '-frames:v', '1', '-q:v', '3', outFile],
        { windowsHide: true },
      );
      video.thumbnail = `/thumbnails/${video.slug}.jpg`;
    } catch (error) {
      console.warn(
        `[content-plugin] Could not extract thumbnail for "${video.fileName}": ${error.message}`,
      );
    }
  }
}

/* ------------------------------------------------------------------
   Local file serving (dev + preview) — Range-aware for video seeking
------------------------------------------------------------------ */

const MEDIA_TYPES = {
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.mov': 'video/quicktime',
  '.ogg': 'video/ogg',
  '.ogv': 'video/ogg',
  '.m4v': 'video/mp4',
  '.3gp': 'video/3gpp',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
};

function createContentMiddleware(contentDir) {
  const root = path.resolve(contentDir);
  return function contentMiddleware(req, res, next) {
    let urlPath;
    try {
      urlPath = decodeURIComponent(String(req.url || '').split('?')[0]);
    } catch {
      return next();
    }
    const rel = urlPath.replace(/^\/+/, '');
    const filePath = path.resolve(root, rel);
    // Path-traversal guard: only serve inside the content folder.
    if (filePath !== root && !filePath.startsWith(root + path.sep)) return next();

    fs.stat(filePath, (statErr, stat) => {
      if (statErr || !stat.isFile()) return next();

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MEDIA_TYPES[ext] || 'application/octet-stream';

      const respond = (statusCode, headers, stream) => {
        res.writeHead(statusCode, headers);
        if (req.method === 'HEAD') return res.end();
        stream.on('error', () => res.end());
        return stream.pipe(res);
      };

      const range = req.headers.range;
      if (range) {
        const match = /bytes=(\d*)-(\d*)/.exec(range);
        let start = match && match[1] ? parseInt(match[1], 10) : 0;
        let end = match && match[2] ? parseInt(match[2], 10) : stat.size - 1;
        if (Number.isNaN(start)) start = 0;
        if (Number.isNaN(end) || end >= stat.size) end = stat.size - 1;
        if (start > end || start >= stat.size) {
          res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
          return res.end();
        }
        return respond(
          206,
          {
            'Content-Type': contentType,
            'Content-Range': `bytes ${start}-${end}/${stat.size}`,
            'Content-Length': end - start + 1,
            'Accept-Ranges': 'bytes',
          },
          fs.createReadStream(filePath, { start, end }),
        );
      }

      return respond(
        200,
        {
          'Content-Type': contentType,
          'Content-Length': stat.size,
          'Accept-Ranges': 'bytes',
        },
        fs.createReadStream(filePath),
      );
    });
  };
}

/* ------------------------------------------------------------------
   Plugin
------------------------------------------------------------------ */

export default function contentPlugin() {
  return {
    name: 'kiristhuvin-sabai-content',

    configureServer(server) {
      // Serve local videos from the root Video/ folder during development.
      server.middlewares.use('/content/videos', createContentMiddleware(VIDEOS_DIR));
    },

    configurePreviewServer(server) {
      // Same for `vite preview`, so a locally-built site can play videos too.
      server.middlewares.use('/content/videos', createContentMiddleware(VIDEOS_DIR));
    },

    resolveId(id) {
      if (id === VIRTUAL_SONGS || id === VIRTUAL_VIDEOS) return `\0${id}`;
      return null;
    },

    async load(id) {
      if (id === `\0${VIRTUAL_SONGS}`) {
        const songs = loadSongs();
        return [
          '// Generated by contentPlugin.js — do not edit.',
          `export const songs = ${JSON.stringify(songs)};`,
          `export const songCategories = ${JSON.stringify(uniqueCategories(songs))};`,
        ].join('\n');
      }
      if (id === `\0${VIRTUAL_VIDEOS}`) {
        const videos = loadVideos();
        await generateThumbnails(videos);
        return [
          '// Generated by contentPlugin.js — do not edit.',
          `export const videos = ${JSON.stringify(videos)};`,
          `export const videoCategories = ${JSON.stringify(uniqueCategories(videos))};`,
        ].join('\n');
      }
      return null;
    },

    closeBundle() {
      // Optional: copy local videos into the build output.
      // Opt-in because the folder is multi-GB (KS_COPY_VIDEOS=1).
      if (process.env.KS_COPY_VIDEOS !== '1') return;
      const outDir = path.join(FRONTEND_DIR, 'dist', 'content', 'videos');
      try {
        fs.cpSync(VIDEOS_DIR, outDir, { recursive: true });
        console.log(`[content-plugin] Copied local videos → ${outDir}`);
      } catch (error) {
        console.warn(`[content-plugin] Could not copy videos: ${error.message}`);
      }
    },
  };
}
