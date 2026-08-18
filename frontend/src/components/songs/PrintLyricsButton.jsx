import { useLanguage } from '../../context/LanguageContext';
import Button from '../Button';

/**
 * "Print Lyrics" — opens the browser print dialog. A dedicated
 * print-only sheet (SongPrintSheet, hidden on screen) is rendered by the
 * parent; @media print styles hide the site chrome and show only the sheet.
 */
export default function PrintLyricsButton({ className = '' }) {
  const { t } = useLanguage();

  return (
    <Button variant="light" size="md" onClick={() => window.print()} className={className}>
      {t.songs.print}
    </Button>
  );
}
