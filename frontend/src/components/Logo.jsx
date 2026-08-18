import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * Church logo + wordmark. `tone` — "light" (cream background)
 * or "dark" (charcoal background).
 */
export default function Logo({ tone = 'light', compact = false }) {
  const { lang } = useLanguage();
  const isDark = tone === 'dark';
  const name = lang === 'ta' ? site.nameTamil : site.name;
  const tagline = lang === 'ta' ? site.taglineTamil : site.tagline;

  return (
    <Link to="/" className="group flex min-w-0 items-center gap-2 sm:gap-3" aria-label={name}>
      <span className="relative inline-flex h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/60 transition-transform duration-300 group-hover:scale-105">
        <img
          src={site.images.logo}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
      </span>
      <span className="flex min-w-0 flex-col leading-tight">
        <span
          className={`font-display truncate text-lg font-semibold sm:text-xl ${
            isDark ? 'text-cream' : 'text-charcoal'
          }`}
        >
          {name}
        </span>
        {!compact && (
          <span className={`text-[11px] font-medium uppercase tracking-[0.18em] text-gold sm:text-xs`}>
            {tagline}
          </span>
        )}
      </span>
    </Link>
  );
}
