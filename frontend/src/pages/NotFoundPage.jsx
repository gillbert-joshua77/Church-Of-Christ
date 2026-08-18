import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Button from '../components/Button';

/**
 * Generic 404 — for any route that doesn't exist.
 */
export default function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream px-4">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <span className="font-display text-7xl font-semibold text-gold/40">404</span>
        <h1 className="font-display text-3xl font-semibold text-charcoal sm:text-4xl">
          {t.songs.notFoundTitle}
        </h1>
        <p className="text-base leading-relaxed text-charcoal/70">{t.songs.notFoundText}</p>
        <Button to="/" variant="primary" size="md">
          {t.nav.home}
        </Button>
        <Link to="/songs" className="text-sm font-bold text-gold transition-colors hover:text-charcoal">
          {t.nav.songs} →
        </Link>
      </div>
    </div>
  );
}
