/**
 * Consistent editorial heading block for every section.
 * `tone` — "light" (cream sections) or "dark" (charcoal sections).
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  sub,
  align = 'left',
  tone = 'light',
  className = '',
}) {
  const isDark = tone === 'dark';
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left';

  return (
    <div className={`flex max-w-3xl flex-col gap-4 ${alignClass} ${className}`}>
      {eyebrow ? (
        <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
          <span className="h-px w-8 bg-gold/60" aria-hidden="true" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-gold/60" aria-hidden="true" />}
        </span>
      ) : null}
      <h2
        className={`text-3xl font-semibold leading-tight text-balance sm:text-4xl lg:text-[2.75rem] font-display ${
          isDark ? 'text-cream' : 'text-charcoal'
        }`}
      >
        {title}
      </h2>
      {subtitle || sub ? (
        <p className={`text-base leading-relaxed sm:text-lg ${isDark ? 'text-cream/70' : 'text-charcoal/70'}`}>
          {subtitle || sub}
        </p>
      ) : null}
    </div>
  );
}
