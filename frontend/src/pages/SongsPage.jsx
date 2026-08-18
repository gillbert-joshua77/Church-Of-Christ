import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { filterSongs } from '../content/songs/songLoader';
import SongSearch from '../components/songs/SongSearch';
import SongFilters from '../components/songs/SongFilters';
import SongCard from '../components/songs/SongCard';
import Button from '../components/Button';

/**
 * Songs library — /songs.
 * Search + category filters combine over the auto-discovered content in the
 * root `Song Lyrics/` folder (see src/content/songs/songLoader.js). When
 * the backend lands, only the loader changes — this page stays as-is.
 */
export default function SongsPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const results = useMemo(() => filterSongs({ query, category }), [query, category]);

  const hasActiveFilters = query.trim() !== '' || category !== 'All';

  const resetFilters = () => {
    setQuery('');
    setCategory('All');
  };

  return (
    <div className="bg-cream">
      {/* Page header */}
      <section className="border-b border-charcoal/8 bg-cream-deep/60">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
            {t.songs.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal text-balance sm:text-5xl lg:text-6xl">
            {t.songs.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            {t.songs.subtitle}
          </p>
        </div>
      </section>

      {/* Search + filters */}
      <section className="sticky top-[72px] z-30 border-b border-charcoal/8 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <SongSearch value={query} onChange={setQuery} className="w-full lg:max-w-md" />
            <SongFilters value={category} onChange={setCategory} />
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
            {results.map((song) => (
              <SongCard key={song.id} song={song} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 rounded-3xl border border-dashed border-charcoal/15 bg-white/60 px-6 py-16 text-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-cream-deep text-gold">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-7 w-7"
              >
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
              </svg>
            </span>
            <p className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
              {t.songs.noResults}
            </p>
            {hasActiveFilters ? (
              <Button variant="goldOutline" size="sm" onClick={resetFilters}>
                {t.songs.resetFilters}
              </Button>
            ) : null}
          </div>
        )}
      </section>
    </div>
  );
}
