/**
 * Formats an ISO date string for display in the current language.
 * Falls back to the raw string when the date cannot be parsed.
 */
export function formatDate(isoDate, lang) {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;
  try {
    const locale = lang === 'ta' ? 'ta-IN' : 'en-US';
    return date.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return isoDate;
  }
}
