import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

/**
 * A song row in the library. Typography-first: number, English title,
 * Tamil title, category, and a view arrow. No heavy imagery.
 */
export default function SongCard({ song }) {
  const { t, lang } = useLanguage();
  const categoryLabel = t.songs.categories[song.category] ?? song.category;

  return (
    <Link
      to={`/songs/${song.slug}`}
      className="group flex w-full items-center gap-4 rounded-2xl border border-charcoal/8 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-lg hover:shadow-charcoal/8 sm:gap-6 sm:p-5"
    >
      {/* Song number */}
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-cream-deep font-display text-base font-semibold text-gold sm:h-14 sm:w-14 sm:text-lg">
        {song.songNumber}
      </span>

      {/* Titles */}
      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="truncate font-display text-lg font-semibold text-charcoal sm:text-xl">
          {song.titleEn}
        </span>
        <span className="truncate text-sm text-charcoal/60 sm:text-base">{song.titleTa}</span>
      </span>

      {/* Category */}
      <span className="hidden shrink-0 rounded-full border border-charcoal/10 bg-cream px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-charcoal/60 md:inline-block">
        {categoryLabel}
      </span>

      {/* Arrow / view */}
      <span
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-charcoal text-cream transition-all duration-300 group-hover:bg-gold group-hover:text-charcoal"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>

      <span className="sr-only">{t.songs.view}</span>
    </Link>
  );
}
