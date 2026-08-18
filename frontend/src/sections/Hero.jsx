import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/Button';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * Hero — full-viewport welcome with the real church photo,
 * a strong dark overlay for readability and one subtle gold orb.
 */
export default function Hero() {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 28 },
    animate: reduceMotion ? undefined : { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] },
  });

  return (
    <section id="home" className="relative flex min-h-[92svh] items-center overflow-hidden bg-charcoal">
      {/* Background image */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={site.images.hero}
          alt=""
          className="h-full w-full object-cover"
          loading="eager"
        />
        {/* Strong, elegant overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/75 to-charcoal/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-charcoal/40" />
      </div>

      {/* Subtle gold orb */}
      {!reduceMotion && (
        <motion.div
          className="pointer-events-none absolute -right-24 top-1/4 h-96 w-96 rounded-full opacity-40 blur-3xl sm:h-[28rem] sm:w-[28rem]"
          style={{
            background:
              'radial-gradient(circle at center, rgba(201,169,107,0.55), rgba(201,169,107,0) 70%)',
          }}
          animate={{ y: [0, -24, 0], opacity: [0.28, 0.45, 0.28] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        />
      )}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.p
            {...fadeUp(0.05)}
            className="mb-6 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold-soft"
          >
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            {t.hero.location}
          </motion.p>

          <motion.h1 {...fadeUp(0.12)} className="font-display text-5xl font-semibold leading-[1.08] text-cream text-balance sm:text-6xl lg:text-7xl">
            {t.hero.name}
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-4 font-display text-2xl italic text-gold-soft sm:text-3xl">
            {t.hero.tagline}
          </motion.p>

          <motion.p {...fadeUp(0.28)} className="mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            {t.hero.supporting}
          </motion.p>

          <motion.div {...fadeUp(0.36)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/#visit" variant="primary" size="lg">
              {t.hero.ctaPrimary}
            </Button>
            <Button to="/#about" variant="ghostLight" size="lg">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp(0.44)}
            className="mt-12 flex flex-col gap-3 border-t border-cream/15 pt-6 text-sm text-cream/75 sm:flex-row sm:items-center sm:gap-8"
          >
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              {t.hero.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gold" aria-hidden="true" />
              {t.hero.serviceTime}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
