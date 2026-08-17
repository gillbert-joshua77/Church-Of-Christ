/**
 * Service time card used in the dark Service Times section.
 */
export default function ServiceCard({ day, note, time, delay = 0 }) {
  return (
    <div
      className="group relative flex flex-col items-center gap-3 rounded-2xl border border-cream/10 bg-charcoal-soft/70 px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-charcoal-soft"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <span
        className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-gold/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden="true"
      />
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">{day}</span>
      <span className="font-display text-4xl font-semibold text-cream sm:text-5xl">{time}</span>
      <span className="text-sm font-medium text-cream/60">{note}</span>
    </div>
  );
}
