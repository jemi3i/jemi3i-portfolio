import { useCallback, type MouseEventHandler } from 'react';
import { useLocation } from 'react-router-dom';
import usePrefersReducedMotion from './usePrefersReducedMotion';

/** Scroll in place on Home; let Link and the route reset handle other routes. */
export default function useHomeLinkClick(): MouseEventHandler<HTMLAnchorElement> {
  const { pathname } = useLocation();
  const reducedMotion = usePrefersReducedMotion();

  return useCallback<MouseEventHandler<HTMLAnchorElement>>((event) => {
    // Preserve native modified-click/new-tab behavior and prior event handlers.
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey ||
      event.altKey || event.shiftKey || (event.currentTarget.target && event.currentTarget.target !== '_self') ||
      pathname !== '/') return;

    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
  }, [pathname, reducedMotion]);
}
