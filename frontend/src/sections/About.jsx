import { Link } from 'react-router-dom';
import RevealAnimation from '../components/RevealAnimation';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * About / Welcome — editorial two-column section.
 * "Our Story" is a future action and links to its upcoming page.
 */
export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-24 bg-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <RevealAnimation className="relative order-1">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-charcoal/15">
              <img
                src={site.images.about}
                alt={t.about.imageAlt}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent"
                aria-hidden="true"
              />
            </div>
            {/* Gold frame accent */}
            <div
              className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-gold/50 sm:-bottom-6 sm:-right-6"
              aria-hidden="true"
            />
          </RevealAnimation>

          {/* Text */}
          <div className="order-2">
            <RevealAnimation>
              <SectionHeading
                eyebrow={t.about.eyebrow}
                title={t.about.heading}
              />
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <p className="mt-6 text-lg font-medium leading-relaxed text-charcoal/85">
                {t.about.lead}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.18}>
              <p className="mt-4 text-base leading-relaxed text-charcoal/70">
                {t.about.body}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.26}>
              <Link
                to="/#about"
                className="group mt-8 inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-charcoal"
              >
                {t.about.storyLabel}
                <span
                  className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  →
                </span>
                <span className="ml-1 rounded-full border border-gold/40 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold-soft">
                  {t.about.storyHint}
                </span>
              </Link>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
