import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getVideoBySlug } from '../data/videos';
import VideoDetail from '../components/videos/VideoDetail';
import Button from '../components/Button';

/**
 * Video detail — /videos/:slug.
 * Resolves the slug against the demo data; renders the reusable
 * VideoDetail component, or a "Video not found" state for invalid
 * slugs (no broken iframe is ever shown).
 */
export default function VideoDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const video = getVideoBySlug(slug);

  if (!video) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-cream px-4">
        <div className="flex max-w-md flex-col items-center gap-4 text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cream-deep text-gold">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-8 w-8"
            >
              <path d="M10.6 6.2 16 3.5v13M6.4 8.9H4a1.5 1.5 0 0 0-1.5 1.5v8A1.5 1.5 0 0 0 4 19.9h10a1.5 1.5 0 0 0 1.5-1.5v-4" />
              <circle cx="6" cy="17" r="2.2" />
              <circle cx="16" cy="13.5" r="2.2" />
              <path d="M6.4 8.9V6a2 2 0 0 1 2-2h3.2" />
            </svg>
          </span>
          <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            {t.videos.notFoundTitle}
          </h1>
          <p className="text-base leading-relaxed text-charcoal/70">{t.videos.notFoundText}</p>
          <Button to="/videos" variant="primary" size="md">
            {t.videos.notFoundAction}
          </Button>
          <Link to="/" className="text-sm font-bold text-gold transition-colors hover:text-charcoal">
            ← {t.nav.home}
          </Link>
        </div>
      </div>
    );
  }

  return <VideoDetail video={video} />;
}
