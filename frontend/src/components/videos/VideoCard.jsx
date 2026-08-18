import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import {
  getVideoTitle,
  getSeriesLabel,
  getEpisodeLabel,
} from '../../content/videos/videoLoader';
import { formatDate } from '../../utils/date';
import VideoThumbnail from './VideoThumbnail';

/**
 * A video card in the library grid.
 *
 * The whole card is a single link to /videos/:slug. The play button is a
 * visual overlay (aria-hidden) — the link itself is the accessible control,
 * named by the localized video title.
 *
 * Hover is deliberately restrained: a subtle elevation, a gentle image
 * zoom, and a warmer play button. No excessive animation.
 */
export default function VideoCard({ video }) {
  const { t, lang } = useLanguage();
  const title = getVideoTitle(video, lang);
  const seriesLabel = getSeriesLabel(video, lang);
  const episodeLabel = getEpisodeLabel(video, lang);
  const categoryLabel = seriesLabel || (t.videos.categories[video.category] ?? video.category);

  return (
    <Link
      to={`/videos/${video.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-charcoal/8 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-xl hover:shadow-charcoal/10"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden">
        <VideoThumbnail
          video={video}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        {/* Soft overlay for chip + play legibility */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-charcoal/20 transition-opacity duration-300 group-hover:opacity-90"
          aria-hidden="true"
        />

        {/* Play button overlay (decorative — card link is the control) */}
        <span
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-cream/60 bg-charcoal/35 text-cream backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal sm:h-16 sm:w-16">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-6 w-6 sm:h-7 sm:w-7">
              <path d="M8 5.5v13l11-6.5L8 5.5Z" />
            </svg>
          </span>
        </span>

        {/* Series / category chip */}
        <span className="absolute left-3 top-3 rounded-full bg-charcoal/70 px-3 py-1 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-cream backdrop-blur-sm">
          {categoryLabel}
        </span>

        {/* Episode + duration chips */}
        {(episodeLabel || video.duration) ? (
          <span className="absolute bottom-3 right-3 flex items-center gap-1.5">
            {episodeLabel ? (
              <span className="rounded-md bg-charcoal/80 px-2 py-0.5 text-xs font-bold tabular-nums text-cream backdrop-blur-sm">
                {episodeLabel}
              </span>
            ) : null}
            {video.duration ? (
              <span className="rounded-md bg-charcoal/80 px-2 py-0.5 text-xs font-bold tabular-nums text-cream backdrop-blur-sm">
                {video.duration}
              </span>
            ) : null}
          </span>
        ) : null}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="line-clamp-2 font-display text-lg font-semibold leading-snug text-charcoal transition-colors duration-300 group-hover:text-gold sm:text-xl">
          {title}
        </h3>
        {video.date ? (
          <p className="mt-auto flex items-center gap-2 text-sm text-charcoal/55">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            >
              <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
              <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
            </svg>
            <time dateTime={video.date}>{formatDate(video.date, lang)}</time>
          </p>
        ) : null}
      </div>
    </Link>
  );
}
