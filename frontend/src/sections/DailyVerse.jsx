import RevealAnimation from '../components/RevealAnimation';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';

/**
 * Daily Bible Verse — calm devotional card.
 *
 * FUTURE: connect a Bible verse API (Tamil + English) here.
 * The verse lives in the translation data (t.dailyVerse.example);
 * replace it with fetched content when the API is wired up.
 */
export default function DailyVerse() {
  const { t } = useLanguage();

  return (
    <section id="verse" className="scroll-mt-24 bg-cream py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <RevealAnimation>
          <SectionHeading
            eyebrow={t.dailyVerse.eyebrow}
            title={t.dailyVerse.heading}
            sub={t.dailyVerse.note}
            align="center"
          />
        </RevealAnimation>

        <RevealAnimation delay={0.12}>
          <figure className="relative mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-gold/25 bg-gradient-to-br from-gold-mist via-cream to-gold-mist px-6 py-12 text-center shadow-xl shadow-gold/10 sm:px-12 sm:py-16">
            {/* Decorative quote marks */}
            <span
              className="pointer-events-none absolute -top-6 left-4 font-display text-[9rem] leading-none text-gold/25 sm:text-[11rem]"
              aria-hidden="true"
            >
              “
            </span>

            <span
              className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold backdrop-blur-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3.5 w-3.5">
                <path d="M4 19.5A2.5 2.5 0 0 1 1.5 17V7.5A2.5 2.5 0 0 1 4 5h5a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 9 14H4a2.5 2.5 0 0 1-2.5-2.5V17A2.5 2.5 0 0 0 4 19.5m9-14.5h5a2.5 2.5 0 0 1 2.5 2.5v4A2.5 2.5 0 0 1 18 14h-5a2.5 2.5 0 0 1-2.5-2.5v-4A2.5 2.5 0 0 1 13 5m-2 14.5A2.5 2.5 0 0 0 13.5 17v-1" />
              </svg>
              {t.dailyVerse.heading}
            </span>

            <blockquote className="mt-8">
              <p className="font-display text-2xl font-medium leading-relaxed text-charcoal text-balance sm:text-3xl">
                {t.dailyVerse.example.verse}
              </p>
            </blockquote>

            <figcaption className="mt-6">
              <span className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.18em] text-gold">
                <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
                {t.dailyVerse.example.reference}
                <span className="h-px w-6 bg-gold/60" aria-hidden="true" />
              </span>
            </figcaption>
          </figure>
        </RevealAnimation>
      </div>
    </section>
  );
}
