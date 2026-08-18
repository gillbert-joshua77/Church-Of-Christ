import RevealAnimation from '../components/RevealAnimation';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

const CARD_KEYS = ['sundayMorning', 'sundayLate', 'wednesday'];

/**
 * Service Times — dark charcoal section with three time cards.
 */
export default function ServiceTimes() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-charcoal py-20 sm:py-24 lg:py-28"
    >
      {/* Soft radial glow */}
      <div
        className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            'radial-gradient(circle at center, rgba(201,169,107,0.6), rgba(201,169,107,0) 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealAnimation>
          <SectionHeading
            eyebrow={t.serviceTimes.eyebrow}
            title={t.serviceTimes.heading}
            sub={t.serviceTimes.sub}
            align="center"
            tone="dark"
          />
        </RevealAnimation>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {site.serviceTimes.map((service, i) => (
            <RevealAnimation key={service.id} delay={i * 0.1} className="h-full">
              <ServiceCard
                day={t.serviceTimes[service.key].day}
                note={t.serviceTimes[service.key].note}
                time={t.serviceTimes[service.key].time || service.time}
                delay={i * 60}
              />
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              href={site.googleMapsDirectionsUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.serviceTimes.ctaDirections}
            </Button>
            <Button to="/#visit" variant="ghostLight">
              {t.serviceTimes.ctaPlanVisit}
            </Button>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
