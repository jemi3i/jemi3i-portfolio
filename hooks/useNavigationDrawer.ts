import { useLayoutEffect, useRef } from 'react';

/** Keep the fixed header's close control and drawer in one modal focus scope. */
export default function useNavigationDrawer(open: boolean, close: () => void) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const homeRef = useRef<HTMLAnchorElement>(null);

  useLayoutEffect(() => {
    if (!open || !dialogRef.current) return;

    const dialog = dialogRef.current;
    const desktop = window.matchMedia('(min-width: 1024px)');
    const isolated: Array<[HTMLElement, boolean]> = [];
    const bodyOverflow = document.body.style.getPropertyValue('overflow');
    const bodyOverflowPriority = document.body.style.getPropertyPriority('overflow');
    const gutter = document.documentElement.style.getPropertyValue('scrollbar-gutter');
    const gutterPriority = document.documentElement.style.getPropertyPriority('scrollbar-gutter');

    drawerRef.current?.querySelector<HTMLAnchorElement>('a')?.focus({ preventScroll: true });

    for (const element of dialog.querySelectorAll<HTMLElement>('[data-drawer-background]')) {
      isolated.push([element, element.inert]);
      element.inert = true;
    }

    // Isolate siblings at each level, including main/footer and other body roots.
    let branch: HTMLElement = dialog;
    while (branch.parentElement && branch !== document.body) {
      for (const sibling of Array.from(branch.parentElement.children)) {
        if (sibling !== branch && sibling instanceof HTMLElement) {
          isolated.push([sibling, sibling.inert]);
          sibling.inert = true;
        }
      }
      branch = branch.parentElement;
    }

    if (window.innerWidth > document.documentElement.clientWidth) {
      document.documentElement.style.setProperty('scrollbar-gutter', 'stable');
    }
    document.body.style.setProperty('overflow', 'hidden');

    const focusable = () => Array.from(dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex="0"]'
    )).filter(element => !element.closest('[inert]') && element.getClientRects().length > 0);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        close();
      } else if (event.key === 'Tab') {
        const items = focusable();
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && (document.activeElement === first || !dialog.contains(document.activeElement))) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && (document.activeElement === last || !dialog.contains(document.activeElement))) {
          event.preventDefault();
          first?.focus();
        }
      }
    };

    const containFocus = (event: FocusEvent) => {
      if (!dialog.contains(event.target as Node)) focusable()[0]?.focus();
    };
    const handleDesktop = () => { if (desktop.matches) close(); };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('focusin', containFocus);
    desktop.addEventListener('change', handleDesktop);
    handleDesktop();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('focusin', containFocus);
      desktop.removeEventListener('change', handleDesktop);
      isolated.forEach(([element, wasInert]) => { element.inert = wasInert; });
      document.body.style.setProperty('overflow', bodyOverflow, bodyOverflowPriority);
      document.documentElement.style.setProperty('scrollbar-gutter', gutter, gutterPriority);
      // The toggle is hidden after resizing to desktop; return to the home link then.
      const target = toggleRef.current?.getClientRects().length ? toggleRef.current : homeRef.current;
      target?.focus({ preventScroll: true });
    };
  }, [open, close]);

  return { dialogRef, drawerRef, toggleRef, homeRef };
}
