import { useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { filterVideos } from '../data/videos';
import VideoSearch from '../components/videos/VideoSearch';
import VideoFilters from '../components/videos/VideoFilters';
import VideoCard from '../components/videos/VideoCard';
import Button from '../components/Button';

/**
 * Videos library — /videos.
 * Search + category filters combine over the demo data in src/data/videos.js.
 * When the backend lands, swap the data import for GET /api/videos/.
 */
export default function VideosPage() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const results = useMemo(() => filterVideos({ query, category }), [query, category]);

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
            {t.videos.eyebrow}
          </span>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-charcoal text-balance sm:text-5xl lg:text-6xl">
            {t.videos.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            {t.videos.subtitle}
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-charcoal/50">
            {t.videos.demoNote}
          </p>
        </div>
      </section>

      {/* Search + filters */}
      <section className="sticky top-[72px] z-30 border-b border-charcoal/8 bg-cream/95 backdrop-blur-md">
        <div className="mx-auto w-full max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <VideoSearch value={query} onChange={setQuery} className="w-full lg:max-w-md" />
            <VideoFilters value={category} onChange={setCategory} />
          </div>
        </div>
      </section>

      {/* Results — 1 column mobile, 2 tablet, 3 desktop */}
      <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {results.map((video) => (
              <VideoCard key={video.id} video={video} />
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
                <path d="M10.6 6.2 16 3.5v13M6.4 8.9H4a1.5 1.5 0 0 0-1.5 1.5v8A1.5 1.5 0 0 0 4 19.9h10a1.5 1.5 0 0 0 1.5-1.5v-4" />
                <circle cx="6" cy="17" r="2.2" />
                <circle cx="16" cy="13.5" r="2.2" />
                <path d="M6.4 8.9V6a2 2 0 0 1 2-2h3.2" />
              </svg>
            </span>
            <p className="font-display text-xl font-semibold text-charcoal sm:text-2xl">
              {t.videos.noResults}
            </p>
            {hasActiveFilters ? (
              <Button variant="goldOutline" size="sm" onClick={resetFilters}>
                {t.videos.resetFilters}
              </Button>
            ) : null}
          </div>
        )}
      </section>
    </div>
  );
}
