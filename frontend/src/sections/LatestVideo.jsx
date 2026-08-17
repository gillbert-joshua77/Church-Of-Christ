import RevealAnimation from '../components/RevealAnimation';
import SectionHeading from '../components/SectionHeading';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * Latest Video / Sermon preview — visual only for now.
 *
 * FUTURE: connect the YouTube API here. The section is self-contained:
 * add `videoUrl`/`videoId` and swap the thumbnail + play button
 * for a real embedded player.
 */
export default function LatestVideo() {
  const { t } = useLanguage();

  return (
    <section id="videos" className="scroll-mt-24 bg-charcoal py-20 sm:py-24 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Video thumbnail */}
          <RevealAnimation>
            <div className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40">
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={site.images.pastor}
                  alt={t.latestVideo.imageAlt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>

              {/* Soft overlay + play button */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-charcoal/30"
                aria-hidden="true"
              />
              <button
                type="button"
                aria-label={t.latestVideo.watchLabel}
                className="absolute inset-0 flex items-center justify-center"
              >
                <span className="inline-flex h-20 w-20 items-center justify-center rounded-full border-2 border-cream/50 bg-charcoal/40 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold/90">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="ml-1 h-8 w-8 text-cream">
                    <path d="M8 5.5v13l11-6.5L8 5.5Z" />
                  </svg>
                </span>
              </button>

              {/* Speaker chip */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center gap-2 sm:bottom-5 sm:left-5">
                <span className="rounded-full bg-charcoal/70 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-soft backdrop-blur-sm">
                  {t.latestVideo.comingSoon}
                </span>
              </div>
            </div>
          </RevealAnimation>

          {/* Text */}
          <div>
            <RevealAnimation>
              <SectionHeading
                eyebrow={t.latestVideo.eyebrow}
                title={t.latestVideo.heading}
                tone="dark"
              />
            </RevealAnimation>

            <RevealAnimation delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/70 sm:text-lg">
                {t.latestVideo.sub}
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.18}>
              <div className="mt-8 flex items-center gap-4">
                <span className="inline-flex h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/60">
                  <img
                    src={site.images.pastor}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
                    {t.latestVideo.speakerLabel}
                  </p>
                  <p className="font-display text-xl font-semibold text-cream">
                    {t.latestVideo.speaker}
                  </p>
                </div>
              </div>
            </RevealAnimation>

            <RevealAnimation delay={0.26}>
              <p className="mt-8 border-l-2 border-gold/50 pl-4 text-sm text-cream/55">
                {t.latestVideo.note}
              </p>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
