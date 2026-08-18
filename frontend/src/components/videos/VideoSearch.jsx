import { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

/**
 * Video search field. Results update live as the visitor types,
 * and a clear (reset) button appears when there is a query.
 */
export default function VideoSearch({ value, onChange, className = '' }) {
  const { t } = useLanguage();
  const inputRef = useRef(null);

  return (
    <div className={`relative ${className}`}>
      {/* Search icon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-gold"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </svg>

      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t.videos.searchPlaceholder}
        aria-label={t.videos.searchLabel}
        className="h-14 w-full rounded-full border border-charcoal/10 bg-white pl-13 pr-14 text-base text-charcoal shadow-sm outline-none transition-all duration-300 placeholder:text-charcoal/40 focus:border-gold/60 focus:ring-2 focus:ring-gold/25 [&::-webkit-search-cancel-button]:hidden"
      />

      {value ? (
        <button
          type="button"
          onClick={() => {
            onChange('');
            inputRef.current?.focus();
          }}
          aria-label={t.videos.clear}
          className="absolute right-3 top-1/2 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full text-charcoal/50 transition-colors duration-300 hover:bg-cream-deep hover:text-charcoal"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            aria-hidden="true"
            className="h-4.5 w-4.5"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      ) : null}
    </div>
  );
}
