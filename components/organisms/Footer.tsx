import React from 'react';
import Text from '../atoms/Text';
import { PROFILE, NAVIGATION_LINKS } from '../../constants';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 pt-32 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-28">
        {/* Brand Imprint */}
        <div className="md:col-span-6">
          <Text variant="massive" className="mb-6 opacity-15 select-none leading-none tracking-brutal">
            {PROFILE.brand}
          </Text>
          <div className="max-w-lg space-y-4">
            <Text variant="title" className="text-xl md:text-2xl text-brand-white uppercase">
              {PROFILE.name}
            </Text>
            <p className="font-sans text-sm md:text-base text-brand-white/60 leading-relaxed font-light">
              Fifth-year Software Engineering student at <span className="text-brand-white font-medium">ESPRIT</span> specializing in Web and Internet Technologies (TWIN). Focused on resilient full-stack systems, interactive digital interfaces, and grassroots community solidarity.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="font-mono text-[9px] px-2 py-1 bg-white/5 border border-white/10 text-brand-white/70">
                PFE_INTERNSHIP_SEEKER
              </span>
              <span className="font-mono text-[9px] px-2 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red">
                ESC_VOLUNTEER_CANDIDATE
              </span>
            </div>
          </div>
        </div>
        
        {/* Portfolio Navigation */}
        <div className="md:col-span-3 md:col-start-8">
          <Text variant="label" className="mb-6 text-brand-white font-bold opacity-90 tracking-technical">
            DOSSIER_INDEX
          </Text>
          <ul className="space-y-3">
            {NAVIGATION_LINKS.map(link => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className="text-xs font-mono uppercase tracking-widest text-brand-white/50 hover:text-brand-red hover:opacity-100 transition-colors inline-block"
                >
                  {link.name}_
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Communication Channels */}
        <div className="md:col-span-2">
          <Text variant="label" className="mb-6 text-brand-white font-bold opacity-90 tracking-technical">
            TRANSMISSION
          </Text>
          <ul className="space-y-3 font-mono text-xs uppercase tracking-widest text-brand-white/50">
            <li>
              <a 
                href={`mailto:${PROFILE.email}`} 
                className="hover:text-brand-red transition-colors block text-[11px] truncate"
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
                className="hover:text-brand-red transition-colors block text-[11px]"
              >
                GitHub Profile_ ↗
              </a>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="hover:text-brand-red transition-colors block text-[11px]"
              >
                Contact Dossier_
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Industrial Imprint Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end border-t border-white/10 pt-8 gap-4">
        <div className="flex flex-col gap-1">
          <Text variant="mono" className="text-[10px] text-brand-white/30">
            © 2026/2027 {PROFILE.name.toUpperCase()} ({PROFILE.brand}). TUNIS, TUNISIA.
          </Text>
          <Text variant="mono" className="text-[9px] text-brand-white/20">
            DESIGNED WITH BRUTALIST PRECISION // ACTIVE PEDAGOGY ESPRIT
          </Text>
        </div>
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"></span>
          <Text variant="mono" className="text-[10px] text-brand-red font-mono">
            STATUS: READY_FOR_DEPLOYMENT
          </Text>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
