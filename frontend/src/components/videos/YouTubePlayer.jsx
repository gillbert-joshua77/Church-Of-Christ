import { getYouTubeEmbedUrl } from '../../data/videos';

/**
 * Responsive YouTube embed player.
 *
 * Always keeps a 16:9 aspect ratio (aspect-video + absolutely-positioned
 * iframe) so it never breaks mobile layouts. Does not autoplay — the
 * visitor starts playback by clicking the iframe itself.
 *
 * Usage:
 *   <YouTubePlayer youtubeId={video.youtubeId} title={video.titleEn} />
 */
export default function YouTubePlayer({ youtubeId, title, className = '' }) {
  if (!youtubeId) return null;

  return (
    <div
      className={`relative aspect-video w-full overflow-hidden rounded-2xl bg-charcoal-deep shadow-lg shadow-charcoal/15 ring-1 ring-charcoal/10 ${className}`}
    >
      <iframe
        src={getYouTubeEmbedUrl(youtubeId)}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
