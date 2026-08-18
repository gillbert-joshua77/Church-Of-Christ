import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { getVideoMime } from '../../content/videos/videoLoader';

/**
 * Local video player — HTML5 <video> for files discovered in the root
 * `Video/` folder (served by the content plugin in dev/preview).
 *
 * Play/pause, volume, fullscreen and progress come from the native
 * controls. Never autoplays. If the file cannot load (e.g. the build is
 * hosted statically without the local files), a clear unavailable state is
 * shown instead of a broken player.
 */
export default function LocalVideoPlayer({ video, title, className = '' }) {
  const { t } = useLanguage();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`relative flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-2xl bg-charcoal-deep px-6 text-center shadow-lg shadow-charcoal/15 ring-1 ring-charcoal/10 ${className}`}
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-cream/20 bg-cream/5">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-6 w-6 text-gold-soft"
          >
            <rect x="3" y="5" width="18" height="14" rx="2.5" />
            <path d="m10 9.5 5 2.5-5 2.5v-5Z" />
          </svg>
        </span>
        <p className="font-display text-lg font-semibold text-cream">{t.videos.unavailableTitle}</p>
        <p className="max-w-sm text-sm leading-relaxed text-cream/60">{t.videos.unavailableText}</p>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal-deep shadow-lg shadow-charcoal/15 ring-1 ring-charcoal/10 ${className}`}
    >
      <video
        controls
        preload="metadata"
        playsInline
        onError={() => setFailed(true)}
        className="absolute inset-0 h-full w-full"
      >
        <source src={video.source} type={getVideoMime(video.source)} />
        {t.videos.browserUnsupported}
      </video>
    </div>
  );
}
