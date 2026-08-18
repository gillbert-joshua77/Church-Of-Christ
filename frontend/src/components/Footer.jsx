import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { site } from '../data/site';

const SOCIAL_ICONS = {
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4.5 w-4.5">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4.5 w-4.5">
      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0 0 24 12Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4.5 w-4.5">
      <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.8-.2-2.2-.4a3.8 3.8 0 0 1-1.4-.9 3.8 3.8 0 0 1-.9-1.4c-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.9.4-1.2.8-.4.4-.6.7-.8 1.2-.2.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.9.8 1.2.4.4.7.6 1.2.8.4.2 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.9-.4 1.2-.8.4-.4.6-.7.8-1.2.2-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1a3.2 3.2 0 0 0-.8-1.2 3.2 3.2 0 0 0-1.2-.8c-.4-.2-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1Zm0 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Zm5.2-3.1a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z" />
    </svg>
  ),
};

/**
 * Site footer: brand, navigation, service times, contact, socials.
 * Contact details and social URLs are intentional placeholders.
 */
export default function Footer() {
  const { t, lang } = useLanguage();
  const year = new Date().getFullYear();
  const name = lang === 'ta' ? site.nameTamil : site.name;
  const tagline = lang === 'ta' ? site.taglineTamil : site.tagline;

  return (
    <footer id="contact" className="scroll-mt-24 bg-charcoal-deep text-cream">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-3" aria-label={name}>
              <span className="inline-flex h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-gold/60">
                <img src={site.images.logo} alt="" className="h-full w-full object-cover" loading="lazy" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-semibold">{name}</span>
                <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
                  {tagline}
                </span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60">{t.footer.description}</p>
            <div className="flex items-center gap-3">
              {site.socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  aria-label={social.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
                >
                  {SOCIAL_ICONS[social.id]}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
              {t.footer.navHeading}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {site.nav.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.href}
                    className="text-sm text-cream/70 transition-colors duration-300 hover:text-gold"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service times */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
              {t.footer.servicesHeading}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/70">
              <li>{t.footer.sunday9}</li>
              <li>{t.footer.sunday11}</li>
              <li>{t.footer.wednesday}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gold-soft">
              {t.footer.contactHeading}
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-cream/70">
              <li>{t.footer.address}, {t.footer.addressLine2}</li>
              <li>
                <a href="tel:" className="transition-colors hover:text-gold">
                  {site.contact.phone}
                </a>
              </li>
              <li>
                <a href="mailto:" className="transition-colors hover:text-gold">
                  {site.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-cream/45 sm:flex-row sm:px-6 lg:px-8">
          <span>
            © {year} {name}, {t.footer.city}. {t.footer.rights}
          </span>
          <span className="uppercase tracking-[0.15em]">{tagline}</span>
        </div>
      </div>
    </footer>
  );
}
