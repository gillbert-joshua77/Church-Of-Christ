import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Restores scroll position on navigation:
 * - path change            → scroll to top
 * - hash on the same page  → smooth-scroll to the target section
 * - hash on a new page     → wait for render, then jump to the section
 *
 * Uses an instant jump for page-to-anchor so the section doesn't miss
 * its scroll-margin, and a smooth scroll for same-page anchor clicks.
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    const target = document.querySelector(hash);
    if (!target) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return;
    }

    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [pathname, hash]);

  return null;
}
