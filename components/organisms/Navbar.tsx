import React, { useCallback, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainNavigation from '../molecules/MainNavigation';
import StatusMonitor from '../molecules/StatusMonitor';
import Text from '../atoms/Text';
import { NAVIGATION_LINKS, PROFILE } from '../../constants';
import useNavigationDrawer from '../../hooks/useNavigationDrawer';
import { getNavigationCurrent } from '../../utils/navigation';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);
  const { dialogRef, drawerRef, toggleRef, homeRef } = useNavigationDrawer(mobileMenuOpen, closeMenu);

  useEffect(() => {
    closeMenu();
  }, [location.key, closeMenu]);

  return (
    <div
      ref={dialogRef}
      role={mobileMenuOpen ? 'dialog' : undefined}
      aria-modal={mobileMenuOpen ? true : undefined}
      aria-label={mobileMenuOpen ? 'Navigation menu' : undefined}
    >
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center bg-gradient-to-b from-brand-black/90 via-brand-black/70 to-transparent backdrop-blur-[2px]">
        <div data-drawer-background className="flex items-center space-x-10 md:space-x-16">
          <Link ref={homeRef} to="/" aria-current={location.pathname === '/' ? 'page' : undefined} className="group block pointer-events-auto" aria-label="Go to JEMI3I home page">
            <span className="font-display font-black text-2xl md:text-3xl tracking-brutal group-hover:text-brand-red transition-all duration-300 block text-brand-white">
              {PROFILE.brand}
            </span>
            <span className="block font-mono text-[8px] text-brand-red tracking-technical uppercase mt-0.5">
              MARWEN_JEMAI
            </span>
          </Link>

          <div className="hidden lg:block pointer-events-auto">
            <MainNavigation />
          </div>
        </div>

        <div className="flex items-center space-x-4 pointer-events-auto">
          <div data-drawer-background className="hidden sm:block">
            <StatusMonitor />
          </div>

          {/* Mobile menu button */}
          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-h-11 min-w-11 shrink-0 p-2 text-brand-white hover:text-brand-red focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-white focus-visible:ring-offset-4 focus-visible:ring-offset-brand-black"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileMenuOpen ? 'mobile-navigation' : undefined}
            aria-haspopup="dialog"
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              {mobileMenuOpen ? '[CLOSE]' : '[MENU]'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div ref={drawerRef} id="mobile-navigation" className="fixed inset-0 z-[90] bg-brand-black/95 backdrop-blur-xl flex flex-col [justify-content:safe_center] overflow-y-auto py-28 px-8 lg:hidden">
          <div className="mb-8">
            <Text variant="label" className="mb-2">NAVIGATE_DOSSIER</Text>
            <Text variant="hero" className="text-4xl text-brand-white leading-none">
              JEMI3I <span className="text-brand-red italic">// MENU</span>
            </Text>
          </div>
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={closeMenu}
                aria-current={getNavigationCurrent(location.pathname, link.path)}
                className={`font-display text-3xl uppercase tracking-tight transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-white ${
                  location.pathname === link.path ? 'text-brand-red font-bold' : 'text-brand-white hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col space-y-2">
            <Text variant="mono" className="text-[10px] text-brand-white/40">MARWEN JEMAI // ESPRIT TWIN</Text>
            <Text variant="mono" className="text-[10px] text-brand-red">OPEN FOR PFE & ESC VOLUNTEERING</Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
