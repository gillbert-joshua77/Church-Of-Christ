import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getYouTubeWatchUrl } from '../../data/videos';
import { formatDate } from '../../utils/date';
import Button from '../Button';
import YouTubePlayer from './YouTubePlayer';
import RelatedVideos from './RelatedVideos';

/**
 * Video detail — /videos/:slug.
 * Embedded player (16:9, no autoplay), description, "Watch on YouTube"
 * link, and a Related Videos sidebar. Rendered by VideoDetailPage after
 * the slug has been resolved against the data.
 */
export default function VideoDetail({ video }) {
  const { t, lang } = useLanguage();
  const title = lang === 'ta' ? video.titleTa : video.titleEn;
  const description = lang === 'ta' ? video.descriptionTa : video.descriptionEn;
  const categoryLabel = t.videos.categories[video.category] ?? video.category;

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

            {/* Player */}
            <div className="mt-6">
              <YouTubePlayer youtubeId={video.youtubeId} title={title} />
            </div>

            {/* Description */}
            <div className="mt-8">
              <p className="max-w-2xl whitespace-pre-line text-base leading-relaxed text-charcoal/75 sm:text-lg">
                {description}
              </p>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={getYouTubeWatchUrl(video.youtubeId)}
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
          </div>

          {/* Related sidebar */}
          <div className="min-w-0">
            <RelatedVideos slug={video.slug} />
          </div>
        </div>
      </div>
    </div>
  );
}
