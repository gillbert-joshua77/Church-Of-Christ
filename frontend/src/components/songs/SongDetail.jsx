import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { getSongTitle, getSongLyrics } from '../../content/songs/songLoader';
import SongLanguageToggle from './SongLanguageToggle';
import LyricsRenderer from './LyricsRenderer';
import DownloadLyricsButton from './DownloadLyricsButton';
import PrintLyricsButton from './PrintLyricsButton';
import SongPrintSheet from './SongPrintSheet';

/**
 * Reusable song detail — driven by a song object (the route resolves the
 * slug and passes the song here, so the same component serves every song).
 *
 * The song language defaults to the site language and can be toggled
 * locally (தமிழ் | English) without affecting the rest of the site.
 */
export default function SongDetail({ song }) {
  const { t, lang } = useLanguage();
  const [songLang, setSongLang] = useState(lang);

  // When the site-wide language changes, follow it for the lyrics too.
  useEffect(() => {
    setSongLang(lang);
  }, [lang]);

  const isTamil = songLang === 'ta';
  const title = getSongTitle(song, songLang);
  // The secondary title only appears when a real translation exists.
  const secondaryTitle = isTamil ? song.titleEn : song.titleTa;
  const showSecondary = secondaryTitle && secondaryTitle !== title;
  const categoryLabel = t.songs.categories[song.category] ?? song.category;
  const sections = getSongLyrics(song, songLang);

  return (
    <div className="bg-cream">
      {/* Visible page chrome — hidden when printing (see SongPrintSheet) */}
      <div className="print:hidden">
      {/* Header */}
      <section className="border-b border-charcoal/8 bg-cream-deep/60">
        <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          {/* Back to Songs */}
          <Link
            to="/songs"
            className="group inline-flex items-center gap-2 text-sm font-bold text-charcoal/60 transition-colors duration-300 hover:text-gold"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
            >
              <path d="M19 12H5m6 6-6-6 6-6" />
            </svg>
            {t.songs.backToSongs}
          </Link>

          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            {/* Titles + category */}
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-white font-display text-base font-semibold text-gold">
                  {song.songNumber}
                </span>
                <span className="rounded-full border border-charcoal/10 bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-charcoal/60">
                  {categoryLabel}
                </span>
              </div>
              <h1 className="mt-5 font-display text-3xl font-semibold leading-tight text-charcoal text-balance sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              {showSecondary ? (
                <p className="mt-2 font-display text-lg text-charcoal/55 sm:text-xl">{secondaryTitle}</p>
              ) : null}
            </div>

            {/* Local song-language toggle */}
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <SongLanguageToggle value={songLang} onChange={setSongLang} />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal/45">
                {t.songs.languageLabel}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Lyrics + actions */}
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <div className="no-print flex flex-wrap items-center gap-3">
          <DownloadLyricsButton song={song} songLang={songLang} />
          <PrintLyricsButton />
        </div>

        <div className="mt-10 rounded-3xl border border-charcoal/8 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
          <LyricsRenderer sections={sections} lang={songLang} />
        </div>
      </section>
      </div>

      {/* Print-only sheet (hidden on screen, shown by @media print) */}
      <SongPrintSheet song={song} songLang={songLang} renderAs="print" />
    </div>
  );
}
