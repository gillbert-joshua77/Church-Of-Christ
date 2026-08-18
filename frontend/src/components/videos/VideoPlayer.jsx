import { useLanguage } from '../../context/LanguageContext';
import LocalVideoPlayer from './LocalVideoPlayer';
import YouTubePlayer from './YouTubePlayer';

/**
 * VideoPlayer — picks the right player for a video entry:
 *
 *   sourceType 'local'     → HTML5 <video> (LocalVideoPlayer)
 *   sourceType 'youtube'   → YouTube embed (YouTubePlayer)
 *   anything else          → clear unavailable state
 *
 * Local and YouTube support stay in separate components; this is the only
 * place that knows how to dispatch between them.
 */
export default function VideoPlayer({ video, title, className = '' }) {
  const { t } = useLanguage();

  if (video.sourceType === 'youtube' && video.youtubeId) {
    return <YouTubePlayer youtubeId={video.youtubeId} title={title} className={className} />;
  }
  if (video.sourceType === 'local' && video.source) {
    return <LocalVideoPlayer video={video} title={title} className={className} />;
  }

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
