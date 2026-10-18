import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MainNavigation from '../molecules/MainNavigation';
import StatusMonitor from '../molecules/StatusMonitor';
import Text from '../atoms/Text';
import { NAVIGATION_LINKS, PROFILE } from '../../constants';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center bg-gradient-to-b from-brand-black/90 via-brand-black/70 to-transparent backdrop-blur-[2px]">
        <div className="flex items-center space-x-10 md:space-x-16">
          <Link to="/" className="group block pointer-events-auto" aria-label="Go to JEMI3I home page">
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
          <StatusMonitor />

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-brand-white hover:text-brand-red focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="font-mono text-xs uppercase tracking-widest">
              {mobileMenuOpen ? '[CLOSE]' : '[MENU]'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[90] bg-brand-black/95 backdrop-blur-xl flex flex-col justify-center px-8 lg:hidden">
          <div className="mb-8">
            <Text variant="label" className="mb-2">NAVIGATE_DOSSIER</Text>
            <Text variant="hero" className="text-4xl text-brand-white leading-none">
              JEMI3I <span className="text-brand-red italic">// MENU</span>
            </Text>
          </div>
          <div className="flex flex-col space-y-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-display text-3xl uppercase tracking-tight transition-colors ${
                  location.pathname === link.path ? 'text-brand-red font-bold' : 'text-brand-white hover:text-brand-red'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col space-y-2">
            <Text variant="mono" className="text-[10px] text-brand-white/40">MARWEN JEMAI // ESPRIT TWIN</Text>
            <Text variant="mono" className="text-[10px] text-brand-red">OPEN FOR PFE & ESC VOLUNTEERING</Text>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
