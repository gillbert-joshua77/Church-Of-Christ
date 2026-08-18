import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getSongBySlug } from '../content/songs/songLoader';
import SongDetail from '../components/songs/SongDetail';
import Button from '../components/Button';

/**
 * Song detail — /songs/:slug.
 * Resolves the slug against the auto-discovered songs; renders the reusable
 * SongDetail component, or a "Song Not Found" state for invalid slugs.
 */
export default function SongDetailPage() {
  const { slug } = useParams();
  const { t } = useLanguage();
  const song = getSongBySlug(slug);

  if (!song) {
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
              <path d="M9 18V5l12-2v13" />
              <circle cx="6" cy="18" r="3" />
              <circle cx="18" cy="16" r="3" />
            </svg>
          </span>
          <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
            {t.songs.notFoundTitle}
          </h1>
          <p className="text-base leading-relaxed text-charcoal/70">{t.songs.notFoundText}</p>
          <Button to="/songs" variant="primary" size="md">
            {t.songs.notFoundAction}
          </Button>
          <Link to="/" className="text-sm font-bold text-gold transition-colors hover:text-charcoal">
            ← {t.nav.home}
          </Link>
        </div>
      </div>
    );
  }

  return <SongDetail song={song} />;
}
