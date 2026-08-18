import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Logo from './Logo';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

/**
 * Sticky header. Desktop: logo left, nav center, actions right.
 * Mobile: logo left, hamburger right, slide-down menu with nav + language.
 */
export default function Header() {
  const { t, lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();

  // Close the mobile menu when the language changes or on Escape.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [lang]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal/5 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="desktop-nav hidden items-center gap-7 lg:flex" aria-label="Main">
          {site.nav.map((item) => (
            <Link
              key={item.id}
              to={item.href}
              className="whitespace-nowrap text-sm font-semibold text-charcoal/75 transition-colors duration-300 hover:text-gold"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <LanguageSwitcher />
          <Button to="/#visit" variant="primary" size="sm">
            {t.header.planVisit}
          </Button>
        </div>

        {/* Mobile: hamburger only — the language switcher lives in the
            mobile menu so the row fits on narrow phones without clipping */}
        <div className="flex items-center lg:hidden">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/10 bg-white text-charcoal transition-colors hover:border-gold hover:text-gold"
          >
            <span className="relative block h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  open ? 'top-1/2 -translate-y-1/2 rotate-45' : ''
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full rounded-full bg-current transition-all duration-300 ${
                  open ? 'bottom-1/2 translate-y-1/2 -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-charcoal/5 bg-cream lg:hidden"
          >
            <nav className="mobile-nav flex flex-col gap-1 px-4 py-5 sm:px-6" aria-label="Mobile">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.05 * i, duration: 0.25 }}
                >
                  <Link
                    to={item.href}
                    onClick={close}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-charcoal/80 transition-colors hover:bg-cream-deep hover:text-gold"
                  >
                    {t.nav[item.key]}
                  </Link>
                </motion.div>
              ))}
              {/* Language switcher — moved here on mobile so the header row
                  never overflows on narrow screens */}
              <div className="mt-3 flex items-center justify-between gap-3 border-t border-charcoal/10 px-4 pt-4">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-charcoal/45">
                  {t.header.language}
                </span>
                <LanguageSwitcher />
              </div>
              <div className="border-t border-charcoal/10 px-4 pt-4 pb-2">
                <Button to="/#visit" variant="primary" size="md" className="w-full" onClick={close}>
                  {t.header.planVisit}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
