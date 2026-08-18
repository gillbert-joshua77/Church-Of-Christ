import RevealAnimation from '../components/RevealAnimation';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * Visit Us — final strong section with the church building photo.
 * Contact details remain configurable placeholders.
 */
export default function VisitUs() {
  const { t } = useLanguage();

  return (
    <section id="visit" className="relative scroll-mt-24 overflow-hidden bg-charcoal">
      {/* Background */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={site.images.building}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/85" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-transparent to-charcoal/80" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <RevealAnimation>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold-soft">
              <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
              {t.visit.eyebrow}
              <span className="h-px w-10 bg-gold/70" aria-hidden="true" />
            </span>

            <h2 className="mt-5 font-display text-4xl font-semibold leading-tight text-cream text-balance sm:text-5xl lg:text-6xl">
              {t.visit.heading}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {t.visit.sub}
            </p>

            {/* Location + times */}
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cream/15 bg-charcoal-soft/60 px-6 py-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
                  {t.visit.location}
                </p>
                <p className="mt-2 text-sm text-cream/70">{t.visit.addressLine2}</p>
              </div>
              <div className="rounded-2xl border border-cream/15 bg-charcoal-soft/60 px-6 py-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
                  {t.visit.sundayLabel}
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  9:00 AM <span className="mx-1 text-gold">·</span> 11:00 AM
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Button
                href={site.googleMapsDirectionsUrl}
                variant="primary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.visit.ctaDirections}
              </Button>
              <Button to="/#contact" variant="ghostLight" size="lg">
                {t.visit.ctaContact}
              </Button>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
