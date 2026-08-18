import RevealAnimation from '../components/RevealAnimation';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

const EXTERNAL_LINK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4.5 w-4.5">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

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

            {/* Church Name */}
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-gold-soft font-medium">
              {t.visit.churchName}
            </p>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
              {t.visit.sub}
            </p>

            {/* Location + Service Time */}
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-cream/15 bg-charcoal-soft/60 px-6 py-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
                  {t.visit.location}
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  {t.visit.location === 'Dindigul, Tamil Nadu' ? 'Dindigul, Tamil Nadu' : 'திண்டுக்கல், தமிழ்நாடு'}
                </p>
              </div>
              <div className="rounded-2xl border border-cream/15 bg-charcoal-soft/60 px-6 py-5 backdrop-blur-sm">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
                  {t.visit.sundayLabel}
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  {t.visit.sundayTime}
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
                {EXTERNAL_LINK_ICON}
              </Button>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}