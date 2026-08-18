import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getRelatedVideos } from '../../data/videos';
import { formatDate } from '../../utils/date';
import VideoThumbnail from './VideoThumbnail';

/**
 * "Related Videos" sidebar for the video detail page.
 * Uses getRelatedVideos() — same category first, never the current video,
 * max 3. Each item links to its own detail page.
 */
export default function RelatedVideos({ slug }) {
  const { t, lang } = useLanguage();
  const related = getRelatedVideos(slug, 3);

  if (related.length === 0) return null;

  return (
    <aside aria-label={t.videos.relatedVideos}>
      <h2 className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
        {t.videos.relatedVideos}
      </h2>
      <ul className="mt-5 flex flex-col gap-4">
        {related.map((video) => {
          const title = lang === 'ta' ? video.titleTa : video.titleEn;
          const categoryLabel = t.videos.categories[video.category] ?? video.category;
          return (
            <li key={video.id}>
              <Link
                to={`/videos/${video.slug}`}
                className="group flex gap-4 rounded-2xl border border-charcoal/8 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-charcoal/8"
              >
                <div className="relative aspect-video w-32 shrink-0 overflow-hidden rounded-xl sm:w-36">
                  <VideoThumbnail
                    youtubeId={video.youtubeId}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cream/50 bg-charcoal/40 text-cream backdrop-blur-sm transition-colors duration-300 group-hover:bg-gold group-hover:text-charcoal">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 h-4 w-4">
                        <path d="M8 5.5v13l11-6.5L8 5.5Z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="flex min-w-0 flex-col gap-1 py-0.5">
                  <h3 className="line-clamp-2 font-display text-sm font-semibold leading-snug text-charcoal transition-colors duration-300 group-hover:text-gold sm:text-base">
                    {title}
                  </h3>
                  <p className="mt-auto text-xs text-charcoal/55">
                    {categoryLabel} ·{' '}
                    <time dateTime={video.date}>{formatDate(video.date, lang)}</time>
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
