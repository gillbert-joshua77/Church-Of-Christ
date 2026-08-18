import { useRef, useState } from 'react';
import html2canvas from 'html2canvas-pro';
import { jsPDF } from 'jspdf';
import { useLanguage } from '../../context/LanguageContext';
import Button from '../Button';
import SongPrintSheet from './SongPrintSheet';

/**
 * "Download Lyrics" — generates a PDF on the frontend from the currently
 * selected song + language.
 *
 * The lyrics sheet is rendered off-screen at A4 width (794px @ 96dpi),
 * captured to a canvas with html2canvas-pro (browser-rendered, so Tamil
 * glyphs are correct), then sliced onto A4 pages in jsPDF.
 */
export default function DownloadLyricsButton({ song, songLang }) {
  const { t } = useLanguage();
  const sheetRef = useRef(null);
  const [busy, setBusy] = useState(false);

  async function handleDownload() {
    if (!sheetRef.current || busy) return;
    setBusy(true);
    try {
      // Let web fonts (Noto Sans Tamil) settle before capture.
      await document.fonts.ready;

      const canvas = await html2canvas(sheetRef.current, {
        scale: 2,
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgHeight = (canvas.height * pageWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'JPEG', 0, position, pageWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const langCode = songLang === 'ta' ? 'ta' : 'en';
      pdf.save(`${song.slug}-lyrics-${langCode}.pdf`);
    } catch (error) {
      console.error('PDF generation failed:', error);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Button
        variant="goldOutline"
        size="md"
        onClick={handleDownload}
        disabled={busy}
        aria-busy={busy}
      >
        {busy ? t.songs.pdfLoading : t.songs.download}
      </Button>

      {/* Off-screen A4-width sheet used only for PDF capture */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -left-[10000px] top-0"
      >
        <div ref={sheetRef}>
          <SongPrintSheet song={song} songLang={songLang} renderAs="pdf" />
        </div>
      </div>
    </>
  );
}
