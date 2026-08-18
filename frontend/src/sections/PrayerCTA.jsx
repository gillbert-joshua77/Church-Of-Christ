import RevealAnimation from '../components/RevealAnimation';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';

/**
 * Prayer CTA — frontend only.
 * FUTURE: link the button to the prayer request form / backend.
 */
export default function PrayerCTA() {
  const { t } = useLanguage();

  return (
    <section id="prayer" className="scroll-mt-24 bg-cream pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealAnimation>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold-mist via-cream to-gold-mist px-6 py-14 text-center shadow-xl shadow-gold/10 ring-1 ring-gold/20 sm:px-12 sm:py-16">
            {/* Soft cross glow accent */}
            <div
              className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full opacity-30 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(169,128,63,0.7), rgba(169,128,63,0) 70%)',
              }}
              aria-hidden="true"
            />

            <span
              className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full opacity-20 blur-3xl"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(201,169,107,0.8), rgba(201,169,107,0) 70%)',
              }}
              aria-hidden="true"
            />

            <div className="relative">
              <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-gold shadow-lg">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
                  <path d="M12 3c2.5 3 5 5.4 5 9a5 5 0 0 1-10 0c0-3.6 2.5-6 5-9Z" />
                  <path d="M9.5 19.5h5" />
                </svg>
              </span>

              <h2 className="mt-6 font-display text-3xl font-semibold text-charcoal text-balance sm:text-4xl lg:text-5xl">
                {t.prayer.heading}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
                {t.prayer.text}
              </p>
              <div className="mt-8">
                <Button to="/#prayer" variant="primary" size="lg">
                  {t.prayer.cta}
                </Button>
              </div>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
