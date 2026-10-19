import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import GlitchText from '../atoms/GlitchText';
import Text from '../atoms/Text';
import { PROFILE } from '../../constants';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

interface HeroSectionProps {
  onSelectTrack?: (track: 'engineering' | 'volunteering') => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSelectTrack }) => {
  const [scrollY, setScrollY] = useState(0);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setScrollY(0);
      return;
    }

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [reducedMotion]);

  // Parallax calculations (bounded to prevent text colliding into fixed navigation)
  const scale = 1 + scrollY * 0.00012;
  const textTranslate = Math.max(-80, scrollY * -0.18);
  const bgTranslate = scrollY * 0.06;

  return (
    <section 
      className="relative w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-12 sm:pb-16 md:pb-20 px-6 md:px-12 bg-brand-black overflow-hidden"
      aria-label="Introduction & Identity Hero"
    >
      {/* Background Cinematic Texture Layer with Calibrated Vignette */}
      <div 
        className="absolute inset-0 z-0 will-change-transform motion-reduce:transform-none pointer-events-none select-none"
        style={{ 
          transform: reducedMotion ? undefined : `scale(${scale}) translateY(${bgTranslate}px)`,
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop&grayscale=true" 
          className="w-full h-full object-cover opacity-55 filter grayscale contrast-125 brightness-100" 
          alt="Atmospheric brutalist texture"
          loading="eager"
        />
        {/* Balanced Cinematic Overlays preserving photographic presence and text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent"></div>
      </div>

      {/* Main Hero Stacking Context */}
      <div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-between flex-grow will-change-transform motion-reduce:transform-none"
        style={{ transform: reducedMotion ? undefined : `translateY(${textTranslate}px)` }}
      >
        {/* 1. Identity & Telemetry Bar — Clear clearance below fixed navbar */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
            <span className="w-8 sm:w-12 h-[1px] bg-brand-red"></span>
            <span className="font-mono text-brand-red font-bold tracking-widest text-[11px] sm:text-xs uppercase">
              MARWEN JEMAI // {PROFILE.brand}
            </span>
            <span className="text-white/25 font-mono text-[10px]">///</span>
            <span className="font-mono text-white/70 text-[10px] sm:text-xs tracking-wider uppercase">
              ESPRIT SOFTWARE ENGINEERING (TWIN)
            </span>
            <span className="text-white/25 font-mono text-[10px] hidden md:inline">///</span>
            <span className="font-mono text-brand-white/40 text-[10px] sm:text-xs tracking-wider hidden md:inline">
              TUNIS, TUNISIA
            </span>
          </div>
        </div>

        {/* 2. Monumental Headline Composition — Responsive clamp() with intentional line rhythm */}
        <div className="space-y-1 sm:space-y-2 md:space-y-3 mb-10 sm:mb-12 md:mb-14">
          {/* Line 1 */}
          <div className="overflow-visible">
            <GlitchText 
              as="h1"
              className="text-[clamp(2.75rem,11.5vw,9.5rem)] text-white tracking-brutal leading-[0.85] font-black uppercase"
            >
              I BUILD.
            </GlitchText>
          </div>

          {/* Line 2 */}
          <div className="overflow-visible">
            <GlitchText 
              as="div"
              className="text-[clamp(2.75rem,11.5vw,9.5rem)] text-brand-red italic tracking-brutal leading-[0.85] font-black uppercase"
            >
              I CREATE.
            </GlitchText>
          </div>

          {/* Keep the headline intact; the split composition needs desktop width. */}
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-6 xl:gap-12 pt-1">
            <div className="overflow-visible shrink-0 whitespace-nowrap">
              <GlitchText 
                as="div"
                className="text-[clamp(2.75rem,11.5vw,9.5rem)] text-white tracking-brutal leading-[0.85] font-black uppercase"
              >
                I CONNECT.
              </GlitchText>
            </div>

            {/* Editorial Subheadline Beside "I CONNECT." */}
            <div className="xl:max-w-md border-l-2 border-brand-red pl-5 sm:pl-6 py-1.5 self-start xl:self-end xl:mb-2">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
                <span className="font-mono text-brand-red text-[10px] font-bold tracking-widest uppercase">
                  ACTIVE_CYCLE // 2026-2027
                </span>
              </div>
              <p className="font-display font-bold text-base sm:text-lg md:text-xl text-brand-white uppercase leading-snug mb-2">
                {PROFILE.heroSubheadline}
              </p>
              <p className="font-sans text-xs sm:text-sm text-brand-white/60 leading-relaxed font-light">
                {PROFILE.heroStatement}
              </p>
            </div>
          </div>
        </div>

        {/* 3. Dual Discovery Pathways — Two Distinct, High-Contrast Entry Points */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {/* Pathway 01: Engineering Recruiters */}
            <Link 
              to="/projects" 
              onClick={() => onSelectTrack && onSelectTrack('engineering')}
              className="block group focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
            >
              <div className="p-4 sm:p-5 border border-brand-red/80 bg-brand-red/10 group-hover:bg-brand-red text-brand-white transition-all duration-300 relative overflow-hidden">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-[10px] text-brand-red group-hover:text-black font-bold uppercase tracking-widest">
                    PATHWAY_01 // PFE RECRUITERS
                  </span>
                  <span className="font-mono text-xs text-brand-red group-hover:text-black transition-transform group-hover:translate-x-1">
                    [EXPLORE] →
                  </span>
                </div>
                <span className="font-display font-bold text-base sm:text-lg uppercase tracking-tight block text-brand-white group-hover:text-black">
                  ENGINEERING PORTFOLIO
                </span>
                <p className="font-sans text-xs text-brand-white/70 group-hover:text-black/85 mt-1 font-light leading-relaxed">
                  Web systems, full-stack architectures & software projects
                </p>
              </div>
            </Link>

            {/* Pathway 02: ESC Solidarity Organizations */}
            <Link 
              to="/volunteering" 
              onClick={() => onSelectTrack && onSelectTrack('volunteering')}
              className="block group focus:outline-none focus-visible:ring-1 focus-visible:ring-white"
            >
              <div className="p-4 sm:p-5 border border-white/20 group-hover:border-white bg-white/[0.03] group-hover:bg-white text-brand-white transition-all duration-300 relative overflow-hidden">
                <div className="flex justify-between items-center mb-1.5">
                  <span className="font-mono text-[10px] text-brand-white/60 group-hover:text-black font-bold uppercase tracking-widest">
                    PATHWAY_02 // SOLIDARITY ORGANIZATIONS
                  </span>
                  <span className="font-mono text-xs text-brand-white/80 group-hover:text-black transition-transform group-hover:translate-x-1">
                    [EXPLORE] →
                  </span>
                </div>
                <span className="font-display font-bold text-base sm:text-lg uppercase tracking-tight block text-brand-white group-hover:text-black">
                  COMMUNITY & VOLUNTEERING
                </span>
                <p className="font-sans text-xs text-brand-white/70 group-hover:text-black/85 mt-1 font-light leading-relaxed">
                  Champion Boxing Club // training & volunteer assistance
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator — Fixed at bottom center */}
      <div 
        className="mt-6 flex flex-col items-center justify-center opacity-30 hover:opacity-100 transition-opacity pointer-events-none select-none"
        aria-hidden="true"
      >
        <div className="w-[1px] h-8 bg-gradient-to-b from-brand-red via-white to-transparent"></div>
        <span className="font-mono text-[8px] tracking-widest text-brand-white/80 mt-1 uppercase">
          SCROLL_TO_DISCOVER
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
