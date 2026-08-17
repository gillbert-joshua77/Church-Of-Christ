import RevealAnimation from './RevealAnimation';

/**
 * Image-based ministry card. Subtle hover: card lifts, image scales slightly.
 */
export default function MinistryCard({ image, alt, title, desc, index = 0 }) {
  return (
    <RevealAnimation delay={(index % 3) * 0.08} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-charcoal/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-charcoal/10">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-4 left-4 h-1 w-10 rounded-full bg-gold transition-all duration-500 group-hover:w-16"
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
          <h3 className="font-display text-xl font-semibold text-charcoal sm:text-2xl">{title}</h3>
          <p className="text-sm leading-relaxed text-charcoal/70 sm:text-base">{desc}</p>
        </div>
      </article>
    </RevealAnimation>
  );
}
