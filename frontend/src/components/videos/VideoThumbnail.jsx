import { useState } from 'react';
import { getYouTubeThumbnail } from '../../data/videos';

/**
 * YouTube thumbnail image with a graceful fallback.
 *
 * Loads the standard thumbnail from YouTube (img.youtube.com) — nothing is
 * downloaded or stored locally. If the thumbnail cannot be loaded (e.g. a
 * placeholder/demo ID), it falls back to a styled placeholder so the UI
 * still works instead of showing a broken image.
 */
export default function VideoThumbnail({ youtubeId, alt = '', className = '' }) {
  const [failed, setFailed] = useState(false);

  if (!youtubeId || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center bg-gradient-to-br from-charcoal-soft via-charcoal to-charcoal-deep ${className}`}
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-cream/20 bg-cream/5">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="ml-0.5 h-6 w-6 text-gold-soft"
          >
            <path d="M8 5.5v13l11-6.5L8 5.5Z" />
          </svg>
        </span>
      </div>
    );
  }

  return (
    <img
      src={getYouTubeThumbnail(youtubeId)}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}
