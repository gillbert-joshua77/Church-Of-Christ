import { useLanguage } from '../../context/LanguageContext';
import { getCategories } from '../../content/videos/videoLoader';

/**
 * Category/series filter pills (All + each category).
 *
 * `options` is an optional array of { value, label } — the Videos page
 * passes localized series labels. When omitted, options are built from
 * getCategories() with the translation table (raw category as fallback).
 */
export default function VideoFilters({ value, onChange, options, className = '' }) {
  const { t } = useLanguage();
  const pills =
    options && options.length
      ? options
      : ['All', ...getCategories()].map((category) => ({
          value: category,
          label: category === 'All' ? t.videos.all : (t.videos.categories[category] ?? category),
        }));

  return (
    <div
      className={`flex flex-wrap items-center gap-2 ${className}`}
      role="group"
      aria-label={t.videos.filterLabel}
    >
      {pills.map((pill) => {
        const active = value === pill.value;
        return (
          <button
            key={pill.value}
            type="button"
            onClick={() => onChange(pill.value)}
            aria-pressed={active}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              active
                ? 'border-charcoal bg-charcoal text-cream shadow-md'
                : 'border-charcoal/10 bg-white text-charcoal/70 hover:border-gold/50 hover:text-gold'
            }`}
          >
            {pill.label}
          </button>
        );
      })}
    </div>
  );
}
