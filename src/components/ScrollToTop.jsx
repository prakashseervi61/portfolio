import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLenis } from 'lenis/react';

/**
 * Route-change scroll reset.
 *
 * React Router keeps the previous scroll offset when navigating, and Lenis
 * (smooth scroll) caches its own position too - so without this you land
 * mid-page on the next route. This resets both the native window scroll and
 * the Lenis instance, and honours ?hash= deep links.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        if (lenis) lenis.scrollTo(target, { immediate: true });
        else target.scrollIntoView();
        return;
      }
    }

    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [pathname, hash, lenis]);

  return null;
}