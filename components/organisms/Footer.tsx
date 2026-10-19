import React from 'react';
import { PROFILE, NAVIGATION_LINKS } from '../../constants';
import { Link, useLocation } from 'react-router-dom';
import { getNavigationCurrent } from '../../utils/navigation';
import useHomeLinkClick from '../../hooks/useHomeLinkClick';

const footerLinkStyles = 'inline-flex min-h-11 max-w-full items-center gap-2 font-mono text-xs uppercase tracking-widest text-brand-white/80 decoration-brand-red underline-offset-4 transition-colors duration-200 hover:text-brand-red hover:underline focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-white motion-reduce:transition-none';
const footerLabelStyles = 'mb-4 font-mono text-[11px] font-bold uppercase tracking-technical text-brand-white/90';

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const handleHomeClick = useHomeLinkClick();

  return (
    <footer aria-label="JEMI3I portfolio footer" className="relative overflow-hidden border-t border-white/10 bg-brand-black px-6 pb-12 pt-16 md:px-12 md:pt-24">
      {/* A full-width imprint band keeps the monumental type clear of navigation. */}
      <div className="mb-12 border-b border-white/10 pb-12 md:mb-16 md:pb-16">
        <Link
          to="/"
          onClick={handleHomeClick}
          aria-label="JEMI3I — Back to homepage"
          aria-current={pathname === '/' ? 'page' : undefined}
          className="block select-none whitespace-nowrap font-display text-[clamp(4rem,22vw,28rem)] font-black uppercase leading-[0.85] tracking-brutal text-brand-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-white"
        >
          {PROFILE.brand}
        </Link>
      </div>

      <div className="mb-16 grid min-w-0 grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12">
        <div className="min-w-0 md:col-span-2 lg:col-span-6">
          <div className="max-w-lg space-y-4">
            <h2 className="font-display text-xl font-bold uppercase tracking-tight text-brand-white md:text-2xl">
              {PROFILE.name}
            </h2>
            <p className="font-sans text-sm font-light leading-relaxed text-brand-white/75 md:text-base">
              Fifth-year Software Engineering student at <span className="font-medium text-brand-white">ESPRIT</span> specializing in Web and Internet Technologies (TWIN). Focused on resilient full-stack systems, interactive digital interfaces, and grassroots community solidarity.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="border border-white/15 bg-white/5 px-2 py-1 font-mono text-[10px] text-brand-white/80">
                PFE_INTERNSHIP_SEEKER
              </span>
              <span className="border border-brand-red/40 bg-brand-red/10 px-2 py-1 font-mono text-[10px] text-brand-red">
                ESC_VOLUNTEER_CANDIDATE
              </span>
            </div>
          </div>
        </div>

        <nav aria-labelledby="footer-dossier-index" className="min-w-0 lg:col-span-3">
          <h2 id="footer-dossier-index" className={footerLabelStyles}>DOSSIER_INDEX</h2>
          <ul className="space-y-1">
            {NAVIGATION_LINKS.map(link => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  aria-current={getNavigationCurrent(pathname, link.path)}
                  className={footerLinkStyles}
                >
                  {link.name}_
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-labelledby="footer-transmission" className="min-w-0 lg:col-span-3">
          <h2 id="footer-transmission" className={footerLabelStyles}>TRANSMISSION</h2>
          <ul className="space-y-1">
            <li>
              <a
                href={`mailto:${PROFILE.email}`}
                className={footerLinkStyles}
                title={`Send direct email to ${PROFILE.email}`}
              >
                Direct Email_
              </a>
            </li>
            <li>
              <a
                href="https://github.com/jemi3i"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in a new tab)"
                className={footerLinkStyles}
              >
                GitHub Profile_ <span aria-hidden="true">↗</span>
              </a>
            </li>
            <li>
              <Link
                to="/contact"
                aria-current={pathname === '/contact' ? 'page' : undefined}
                className={footerLinkStyles}
              >
                Contact Dossier_
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Industrial imprint and status remain readable beneath the content grid. */}
      <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-end">
        <div className="flex min-w-0 flex-col gap-1 font-mono text-[10px] uppercase leading-relaxed tracking-widest text-brand-white/65">
          <p>© 2026/2027 {PROFILE.name.toUpperCase()} ({PROFILE.brand}). TUNIS, TUNISIA.</p>
          <p>DESIGNED WITH BRUTALIST PRECISION // ACTIVE PEDAGOGY ESPRIT</p>
        </div>
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-brand-red animate-pulse motion-reduce:animate-none" />
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-widest text-brand-red">
            STATUS: READY_FOR_DEPLOYMENT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
