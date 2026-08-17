import { useLanguage } from '../context/LanguageContext';

/**
 * தமிழ் / English segmented switcher. Persists via LanguageContext.
 */
export default function LanguageSwitcher({ tone = 'light' }) {
  const { lang, setLang } = useLanguage();
  const isDark = tone === 'dark';

  const baseTrack = isDark
    ? 'border-cream/20 bg-charcoal-soft'
    : 'border-charcoal/10 bg-cream-deep';

  const baseThumb = isDark
    ? 'bg-cream text-charcoal'
    : 'bg-charcoal text-cream';

  return (
    <div
      className={`inline-flex items-center rounded-full border p-1 ${baseTrack}`}
      role="group"
      aria-label="Language"
    >
      {(['ta', 'en']).map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 text-xs font-bold tracking-wide transition-all duration-300 ${
              active
                ? `${baseThumb} shadow`
                : isDark
                  ? 'text-cream/60 hover:text-cream'
                  : 'text-charcoal/55 hover:text-charcoal'
            }`}
          >
            {code === 'ta' ? 'தமிழ்' : 'English'}
          </button>
        );
      })}
    </div>
  );
}
