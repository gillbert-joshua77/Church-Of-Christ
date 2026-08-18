/**
 * Renders structured song lyrics (sections of labelled lines).
 *
 * Sections come from the song data (e.g. "Verse 1", "Chorus", "Bridge").
 * Each section is styled separately with generous line-height and spacing
 * so lyrics stay easy to read — especially Tamil for elderly users.
 */
export default function LyricsRenderer({ sections, lang }) {
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <div className="lyrics-body flex flex-col gap-8">
      {sections.map((section, i) => {
        // Sections carry bilingual labels (labelEn/labelTa) when available.
        const label =
          section.labelTa && section.labelEn
            ? lang === 'ta'
              ? section.labelTa
              : section.labelEn
            : section.label;
        return (
        <section
          key={`${section.label}-${i}`}
          className="flex flex-col gap-3"
          aria-label={label}
        >
          <h3 className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-gold">
            <span className="h-px w-6 bg-gold/50" aria-hidden="true" />
            {label}
          </h3>
          <div className="flex flex-col gap-2.5">
            {section.lines.map((line, j) => (
              <p
                key={j}
                className={
                  lang === 'ta'
                    ? 'text-xl leading-[1.95] text-charcoal/90 sm:text-[1.35rem] sm:leading-[2]'
                    : 'text-lg leading-[1.8] text-charcoal/90 sm:text-xl sm:leading-[1.85]'
                }
              >
                {line}
              </p>
            ))}
          </div>
        </section>
        );
      })}
    </div>
  );
}
