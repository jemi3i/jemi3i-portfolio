/** Identify the current page, including aliases, or its parent project section. */
export function getNavigationCurrent(pathname: string, target: string): 'page' | 'location' | undefined {
  const path = pathname === '/work' ? '/projects'
    : pathname === '/impact' ? '/volunteering'
    : pathname;
  if (path === target) return 'page';
  if (target === '/projects' && path.startsWith('/project/')) return 'location';
  return undefined;
}
