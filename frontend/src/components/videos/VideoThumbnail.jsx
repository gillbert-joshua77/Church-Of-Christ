import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getVideoTitle, getYouTubeThumbnail } from '../../content/videos/videoLoader';

/**
 * Video thumbnail with a graceful, on-brand fallback.
 *
 * Priority:
 *   1. Existing thumbnail/poster image found next to the video
 *      (or a frame extracted by the content plugin via ffmpeg)
 *   2. YouTube thumbnail (for YouTube entries)
 *   3. Branded CSS placeholder — church name, gold accent and the video
 *      title, in the site's design system. Never a broken image.
 */
export default function VideoThumbnail({ video, alt = '', className = '' }) {
  const { lang } = useLanguage();
  const [failed, setFailed] = useState(false);

  const youtubeId = video?.sourceType === 'youtube' ? video.youtubeId : null;
  const src = video?.thumbnail || (youtubeId ? getYouTubeThumbnail(youtubeId) : null);

  if (src && !failed) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setFailed(true)}
        className={className}
      />
    );
  }

  const title = video ? getVideoTitle(video, lang) : '';

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center gap-3 overflow-hidden bg-gradient-to-br from-charcoal-soft via-charcoal to-charcoal-deep px-4 py-6 text-center ${className}`}
    >
      {/* Subtle gold rule + play mark */}
      <span className="h-px w-10 bg-gold" aria-hidden="true" />
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-cream/20 bg-cream/5">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-0.5 h-5 w-5 text-gold-soft">
          <path d="M8 5.5v13l11-6.5L8 5.5Z" />
        </svg>
      </span>
      {title ? (
        <span className="line-clamp-2 max-w-[90%] font-display text-sm font-semibold leading-snug text-cream sm:text-base">
          {title}
        </span>
      ) : null}
      <span className="text-[0.625rem] font-bold uppercase tracking-[0.22em] text-gold-soft">
        Church Of Christ
      </span>
    </div>
  );
}
