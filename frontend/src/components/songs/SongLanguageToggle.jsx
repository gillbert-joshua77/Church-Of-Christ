/**
 * Local song-language toggle (தமிழ் | English).
 * Independent from the site-wide language switcher — lets a visitor
 * read the lyrics in the other language without changing the site.
 */
export default function SongLanguageToggle({ value, onChange, tone = 'light' }) {
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
      aria-label="Song language"
    >
      {(['ta', 'en']).map((code) => {
        const active = value === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => onChange(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1.5 text-xs font-bold transition-all duration-300 ${
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
