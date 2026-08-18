import { useLanguage } from '../../context/LanguageContext';
import { site } from '../../data/site';
import { getSongTitle, getSongLyrics } from '../../content/songs/songLoader';
import LyricsRenderer from './LyricsRenderer';

/**
 * The printable / PDF "sheet": church name + tagline, song title,
 * language, and lyrics. Used in two places:
 *  1. Hidden on screen, shown by @media print for "Print Lyrics".
 *  2. Rendered off-screen at A4 width and captured to canvas for the PDF.
 *
 * `renderAs` — "print" (screen:hidden) or "pdf" (offscreen, fixed width).
 */
export default function SongPrintSheet({ song, songLang, renderAs = 'print' }) {
  const { lang } = useLanguage();
  const isTamil = songLang === 'ta';

  const title = getSongTitle(song, songLang);
  const lyrics = getSongLyrics(song, songLang);
  const languageLabel = isTamil ? 'தமிழ்' : 'English';
  const name = lang === 'ta' ? site.nameTamil : site.name;
  const tagline = lang === 'ta' ? site.taglineTamil : site.tagline;

  if (renderAs === 'pdf') {
    return (
      <div
        className="bg-white p-10 text-charcoal"
        style={{ width: 794, fontFamily: 'Manrope, "Noto Sans Tamil", sans-serif' }}
      >
        <PrintSheetHeader name={name} tagline={tagline} />
        <div className="mt-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
            {song.songNumber} · {languageLabel}
          </p>
          <h1 className="mt-2 text-3xl font-semibold leading-snug" style={{ fontFamily: 'Fraunces, "Noto Sans Tamil", serif' }}>
            {title}
          </h1>
        </div>
        <div className="mt-8">
          <LyricsRenderer sections={lyrics} lang={songLang} />
        </div>
      </div>
    );
  }

  return (
    <div className="hidden print:block print:bg-white print:p-10 print:text-charcoal">
      <PrintSheetHeader name={name} tagline={tagline} />
      <div className="mt-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-gold">
          {song.songNumber} · {languageLabel}
        </p>
        <h1 className="mt-2 text-3xl font-semibold leading-snug font-display">{title}</h1>
      </div>
      <div className="mt-8">
        <LyricsRenderer sections={lyrics} lang={songLang} />
      </div>
    </div>
  );
}

function PrintSheetHeader({ name, tagline }) {
  return (
    <div className="flex items-center gap-4 border-b border-charcoal/15 pb-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full ring-2 ring-gold/60">
        <img src={site.images.logo} alt="" className="h-full w-full object-cover" />
      </span>
      <div className="flex flex-col gap-0.5">
        <span className="text-xl font-semibold leading-tight font-display">{name}</span>
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">{tagline}</span>
      </div>
    </div>
  );
}
