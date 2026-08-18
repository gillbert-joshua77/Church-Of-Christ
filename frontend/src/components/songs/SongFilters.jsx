import { useLanguage } from '../../context/LanguageContext';
import { getCategories } from '../../content/songs/songLoader';

/**
 * Category filter pills (All + each category).
 * The active filter is highlighted; filters combine with search upstream.
 */
export default function SongFilters({ value, onChange, className = '' }) {
  const { t } = useLanguage();
  const options = ['All', ...getCategories()];

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="group"
      aria-label="Filter songs by category"
    >
      {options.map((category) => {
        const active = value === category;
        const label = category === 'All' ? t.songs.all : t.songs.categories[category];
        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              active
                ? 'border-charcoal bg-charcoal text-cream shadow-md'
                : 'border-charcoal/10 bg-white text-charcoal/70 hover:border-gold/50 hover:text-gold'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
