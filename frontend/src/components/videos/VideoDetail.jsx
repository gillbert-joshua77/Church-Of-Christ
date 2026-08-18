import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import {
  getVideoTitle,
  getSeriesLabel,
  getEpisodeLabel,
  getVideoDescription,
  getYouTubeWatchUrl,
  getYouTubeThumbnail,
} from '../../content/videos/videoLoader';
import { formatDate } from '../../utils/date';
import Button from '../Button';
import VideoPlayer from './VideoPlayer';
import RelatedVideos from './RelatedVideos';

/**
 * Video detail — /videos/:slug.
 *
 * YouTube-style layout: main player (active part) on the left,
 * parts playlist sidebar on the right. Single-part videos show
 * the player alone; multi-part videos let users switch parts.
 */
export default function VideoDetail({ video }) {
  const { t, lang } = useLanguage();
  const [activePartIndex, setActivePartIndex] = useState(0);

  const title = getVideoTitle(video, lang);
  const description = getVideoDescription(video, lang);
  const seriesLabel = getSeriesLabel(video, lang);
  const episodeLabel = getEpisodeLabel(video, lang);
  const categoryLabel =
    seriesLabel || (t.videos.categories[video.category] ?? video.category);
  const isYouTube = video.sourceType === 'youtube';

  const hasParts = video.parts && video.parts.length > 1;
  const activePart = hasParts ? video.parts[activePartIndex] : null;
  const activeYoutubeId = activePart ? activePart.ytId : video.youtubeId;

  return (
    <div className="bg-cream">
      <div className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {/* Breadcrumb */}
        <Link
          to="/videos"
          className="inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors duration-300 hover:text-charcoal"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="h-4 w-4"
          >
            <path d="M19 12H5m6 6-6-6 6-6" />
          </svg>
          {t.videos.backToVideos}
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          {/* Main column */}
          <div className="min-w-0 lg:col-span-2">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-gold/40 bg-gold-mist/50 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-gold">
                {categoryLabel}
              </span>
              {episodeLabel ? (
                <span className="rounded-full border border-charcoal/10 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-[0.14em] text-charcoal/60">
                  {episodeLabel}
                </span>
              ) : null}
              {video.date ? (
                <span className="flex items-center gap-2 text-sm text-charcoal/60">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="4.5" width="18" height="17" rx="2.5" />
                    <path d="M3 9.5h18M8 2.5v4M16 2.5v4" />
                  </svg>
                  <time dateTime={video.date}>{formatDate(video.date, lang)}</time>
                </span>
              ) : null}
              {video.duration ? (
                <span className="flex items-center gap-1.5 text-sm text-charcoal/60">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                  {video.duration}
                </span>
              ) : null}
            </div>

            {/* Title */}
            <h1 className="mt-4 font-display text-3xl font-semibold leading-tight text-charcoal text-balance sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>

            {/* Active Part Player */}
            <div className="mt-6">
              <VideoPlayer
                video={{ ...video, youtubeId: activeYoutubeId }}
                title={activePart ? `${title} — ${t.videos.part} ${activePart.part_no}` : title}
              />
            </div>

            {/* Active part label */}
            {hasParts ? (
              <p className="mt-3 flex items-center gap-2 text-sm font-semibold text-charcoal/60">
                <span className="h-px w-5 bg-gold/60" aria-hidden="true" />
                {t.videos.part} {activePart.part_no}
              </p>
            ) : null}

            {/* Description */}
            {description ? (
              <div className="mt-8">
                <p className="max-w-2xl whitespace-pre-line text-base leading-relaxed text-charcoal/75 sm:text-lg">
                  {description}
                </p>
              </div>
            ) : null}

            {/* Actions */}
            {isYouTube ? (
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button
                  href={getYouTubeWatchUrl(activeYoutubeId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="md"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4.5 w-4.5"
                  >
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
                  </svg>
                  {t.videos.watchOnYouTube}
                </Button>
              </div>
            ) : null}
          </div>

          {/* Sidebar — parts playlist (multi-part) or related (single-part) */}
          <div className="min-w-0">
            {hasParts ? (
              <div className="rounded-2xl border border-charcoal/8 bg-white shadow-sm">
                {/* Playlist header */}
                <div className="border-b border-charcoal/8 px-5 py-4">
                  <h2 className="font-display text-base font-semibold leading-snug text-charcoal line-clamp-2 sm:text-lg">
                    {title}
                  </h2>
                  <p className="mt-1 text-xs font-medium text-charcoal/50">
                    {video.parts.length} {t.videos.part}{video.parts.length > 1 ? 's' : ''}
                  </p>
                </div>

                {/* Parts list */}
                <div className="max-h-[60vh] overflow-y-auto">
                  {video.parts.map((part, index) => {
                    const isActive = index === activePartIndex;
                    return (
                      <button
                        key={part.part_no}
                        onClick={() => setActivePartIndex(index)}
                        className={`flex w-full items-center gap-3 px-4 py-3 text-left transition-colors duration-200 ${
                          isActive
                            ? 'border-l-[3px] border-gold bg-gold-mist/40'
                            : 'border-l-[3px] border-transparent hover:bg-cream-deep/60'
                        }`}
                      >
                        {/* Part number / playing indicator */}
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                            isActive
                              ? 'bg-gold text-charcoal'
                              : 'bg-charcoal/8 text-charcoal/50'
                          }`}
                        >
                          {isActive ? (
                            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
                              <path d="M6 4h4v16H6V4Zm8 0h4v16h-4V4Z" />
                            </svg>
                          ) : (
                            part.part_no
                          )}
                        </span>

                        {/* Thumbnail */}
                        <div className="relative h-16 w-28 shrink-0 overflow-hidden rounded-lg bg-charcoal-deep">
                          <img
                            src={getYouTubeThumbnail(part.ytId)}
                            alt={`${title} — ${t.videos.part} ${part.part_no}`}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          {isActive && (
                            <div className="absolute inset-0 flex items-center justify-center bg-charcoal/25">
                              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 text-cream drop-shadow">
                                <path d="M8 5.5v13l11-6.5L8 5.5Z" />
                              </svg>
                            </div>
                          )}
                        </div>

                        {/* Part title */}
                        <div className="min-w-0 flex-1">
                          <p
                            className={`line-clamp-2 text-sm font-semibold leading-snug ${
                              isActive ? 'text-gold' : 'text-charcoal'
                            }`}
                          >
                            {title}
                          </p>
                          <p className="mt-0.5 text-xs text-charcoal/50">
                            {t.videos.part} {part.part_no}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <RelatedVideos slug={video.slug} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
