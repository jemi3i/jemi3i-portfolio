import React, { useState } from 'react';
import HeroSection from '../components/organisms/HeroSection';
import ProjectGrid from '../components/organisms/ProjectGrid';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import GlitchText from '../components/atoms/GlitchText';
import { PROJECTS, VOLUNTEERING_DATA, PROFILE, INDUSTRIAL_TICKER_TEXT } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'engineering' | 'creative'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="bg-brand-black">
      {/* 1. Cinematic Hero Section with Dual Pathways */}
      <HeroSection />

      {/* 3. Personal Statement / Manifesto Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none select-none">
          <Text variant="massive" className="text-brand-white leading-[0.6]">PERSIST</Text>
        </div>
        <div className="max-w-5xl relative z-10">
          <Text variant="label" className="mb-6 text-brand-red tracking-technical">
            ENGINEERING_THESIS // 01
          </Text>
          <Text variant="editorial" className="text-brand-white mb-12 max-w-4xl leading-tight">
            "Code is an architecture of discipline; empathy is its social purpose. Great systems are not measured solely by algorithmic throughput, but by how reliably they serve real humans."
          </Text>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
            <div>
              <Text variant="mono" className="text-brand-red mb-2">01 // ACADEMIC FOUNDATION</Text>
              <p className="font-sans text-sm text-brand-white/70 leading-relaxed">
                Fifth-year Software Engineering student at ESPRIT specialized in Web and Internet Technologies (TWIN).
              </p>
            </div>
            <div>
              <Text variant="mono" className="text-brand-red mb-2">02 // PRACTICAL RIGOR</Text>
              <p className="font-sans text-sm text-brand-white/70 leading-relaxed">
                Industry experience at Zmenuvis developing student grade systems and managing real-world database features.
              </p>
            </div>
            <div>
              <Text variant="mono" className="text-brand-red mb-2">03 // HUMAN SOLIDARITY</Text>
              <p className="font-sans text-sm text-brand-white/70 leading-relaxed">
                One year coaching kickboxing beginners, children, and elders, fostering inclusive community growth.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Link to="/about">
              <Button variant="ghost" className="text-lg italic border-b border-brand-red pb-2 text-brand-white">
                Read Full Academic & Personal Biography →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Selected Work Showcase */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-t border-white/10 bg-brand-black" id="work">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <Text variant="label" className="mb-4 text-brand-red italic">
              ARCHIVE_EXHIBITIONS // 001 — 003
            </Text>
            <Text variant="hero" className="text-4xl md:text-7xl leading-none">
              SELECTED <span className="text-brand-red italic">WORK</span>
            </Text>
            <p className="font-sans text-sm md:text-base text-brand-white/70 mt-4 max-w-xl font-light">
              Three distinct digital exhibitions spanning creative computing, full-stack health & sports platforms, and experimental physical computing.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center space-x-2 border border-white/10 p-1 bg-brand-gray">
              {(['all', 'engineering', 'creative'] as const).map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 transition-all ${
                    activeFilter === tab 
                      ? 'bg-brand-red text-white font-bold' 
                      : 'text-brand-white/50 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <Link to="/projects">
              <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white py-3 text-[10px]">
                View All Specs
              </Button>
            </Link>
          </div>
        </div>

        {/* Staggered Brutalist Project Grid */}
        <ProjectGrid projects={filteredProjects} />
      </section>

      {/* 5. Community & Volunteering Highlight (The Kickboxing Experience) */}
      <section className="py-24 md:py-36 px-6 md:px-12 border-t border-white/10 bg-brand-black" id="volunteering">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <Text variant="label" className="mb-4 text-brand-red italic">
                ARCHIVE_SOLIDARITY // EUROPEAN SOLIDARITY CORPS
              </Text>
              <Text variant="hero" className="text-4xl md:text-7xl leading-none">
                COMMUNITY <span className="text-brand-red italic">IMPACT</span>
              </Text>
              <p className="font-sans text-sm md:text-base text-brand-white/70 mt-4 max-w-xl font-light">
                One year of grassroots athletic mentorship, youth empowerment, and intergenerational inclusion in Tunis. Verified and ready for ESC solidarity missions.
              </p>
            </div>

            <Link to="/volunteering">
              <Button variant="outline" className="border-brand-red text-brand-red hover:bg-brand-red hover:text-white py-3 text-[10px]">
                Full Impact Dossier
              </Button>
            </Link>
          </div>

          {/* Cohesive Interactive Exhibition Card — Identical architectural pattern to Exhibition 002 */}
          <article className="border border-white/10 bg-brand-gray/30 relative group overflow-hidden transition-colors hover:border-brand-red/60">
            {/* Top Metadata Strip */}
            <div className="p-6 md:px-10 md:py-6 border-b border-white/10 flex flex-wrap justify-between items-center gap-4 bg-brand-black/80 backdrop-blur-md">
              <div className="flex items-center gap-4">
                <span className="font-mono text-brand-red font-bold text-xs">INITIATIVE // 001</span>
                <span className="text-white/20 font-mono text-xs">///</span>
                <span className="font-mono text-xs uppercase text-brand-white/80 tracking-widest">
                  COMMUNITY MENTORSHIP & INCLUSION
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 text-white/60 uppercase">
                  1 YEAR COMPLETED
                </span>
                <span className="font-mono text-[9px] px-2.5 py-1 bg-brand-red/10 border border-brand-red/40 text-brand-red uppercase">
                  ESC_VOLUNTEERING_READY
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Split: Large Media Presentation */}
              <div className="lg:col-span-7 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 min-h-[380px] lg:min-h-[500px]">
                <Link 
                  to="/volunteering" 
                  className="block w-full h-full relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                  aria-label={`View community mentorship details for ${VOLUNTEERING_DATA.title}`}
                >
                  <img 
                    src={VOLUNTEERING_DATA.image} 
                    alt={VOLUNTEERING_DATA.title} 
                    className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent pointer-events-none" />

                  <div className="absolute top-4 left-4 pointer-events-none">
                    <span className="font-mono text-[8px] md:text-[9px] bg-brand-black/90 px-3 py-1.5 border border-white/15 text-white/70 uppercase tracking-widest backdrop-blur-md">
                      TUNIS, TUNISIA // ATHLETIC MENTORSHIP
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 pointer-events-none flex justify-between items-end">
                    <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest bg-brand-black/90 px-3 py-1 border border-brand-red/40">
                      COMMUNITY_SOLIDARITY_VERIFIED
                    </span>
                    <span className="font-mono text-xs text-brand-white bg-brand-black/90 px-3 py-1 border border-white/20 group-hover:border-brand-red transition-colors">
                      EXPLORE DOSSIER →
                    </span>
                  </div>
                </Link>
              </div>

              {/* Right Split: Technical Information Panel */}
              <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between bg-brand-black">
                <div className="space-y-6">
                  <div>
                    <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest block mb-2 font-bold">
                      COMMUNITY_SPECIFICATION // 001
                    </span>
                    <h3 className="font-display font-black text-2xl md:text-4xl text-brand-white uppercase leading-tight group-hover:text-brand-red transition-colors">
                      {VOLUNTEERING_DATA.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-brand-white/70 mt-2 leading-relaxed font-light">
                      {VOLUNTEERING_DATA.description}
                    </p>
                  </div>

                  {/* Tripartite Community Engagement Pillars */}
                  <div className="border-t border-white/10 pt-6 space-y-3">
                    <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                      COMMUNITY_ENGAGEMENT_PILLARS
                    </span>
                    
                    <div className="p-3 border border-white/10 bg-brand-gray/40">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-brand-red" />
                        <span className="font-mono text-xs font-bold uppercase text-brand-white">YOUTH EMPOWERMENT</span>
                      </div>
                      <p className="font-sans text-xs text-brand-white/60">
                        Guided adolescents in cultivating discipline, sportsmanship, and self-confidence through athletic training.
                      </p>
                    </div>

                    <div className="p-3 border border-white/10 bg-brand-gray/40">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-white/70" />
                        <span className="font-mono text-xs font-bold uppercase text-brand-white">INTERGENERATIONAL INCLUSION</span>
                      </div>
                      <p className="font-sans text-xs text-brand-white/60">
                        Adapted mobility and conditioning routines for older adults to maintain cardiovascular vitality and community connection.
                      </p>
                    </div>

                    <div className="p-3 border border-white/10 bg-brand-gray/40">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                        <span className="font-mono text-xs font-bold uppercase text-brand-white">BEGINNER ONBOARDING & ESC</span>
                      </div>
                      <p className="font-sans text-xs text-brand-white/60">
                        Patient peer guidance breaking down entry barriers for newcomers in an inclusive, non-intimidating setting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-brand-white/40 uppercase">
                    ROLE: {VOLUNTEERING_DATA.role}
                  </span>
                  <Link to="/volunteering" className="font-mono text-xs text-brand-red hover:underline">
                    Volunteering Dossier →
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 6. Cinematic Editorial Manifesto Section */}
      <section 
        id="manifesto" 
        className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-between pt-36 md:pt-44 lg:pt-48 pb-20 md:pb-28 px-6 md:px-12 bg-brand-black overflow-hidden group select-none z-10 scroll-mt-28 md:scroll-mt-36"
      >
        {/* Cinematic Background Photography with Balanced Localized Scrim */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop&grayscale=true" 
            className="w-full h-full object-cover object-center filter grayscale contrast-125 brightness-[0.85] transition-transform duration-[10s] ease-out scale-100 group-hover:scale-105" 
            alt="Engineering Rigor & Community Solidarity"
            loading="lazy"
          />
          {/* Base darkening overlay */}
          <div className="absolute inset-0 bg-brand-black/55 transition-colors duration-700 group-hover:bg-brand-black/45" />
          
          {/* Localized dark radial gradient behind the typography to ensure high contrast without crushing photographic presence */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(2,2,2,0.92)_0%,rgba(2,2,2,0.70)_55%,rgba(2,2,2,0.85)_100%)]" />
          
          {/* Subtle vertical gradients to seamlessly feather into adjacent sections */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-brand-black via-brand-black/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        </div>

        {/* Ambient Top Metadata Indicator (Comfortably spaced below fixed navbar) */}
        <div className="relative z-10 text-center mb-8 md:mb-12">
          <span className="font-mono text-brand-red text-xs md:text-sm tracking-technical uppercase block mb-1 font-semibold">
            TUNISIA TO EUROPE // WORLDWIDE COLLABORATION
          </span>
          <span className="font-mono text-[9px] md:text-[10px] text-white/40 tracking-widest uppercase block">
            PERSONAL_MANIFESTO // DECLARATION_02
          </span>
        </div>

        {/* Monumental Manifesto Headlines — Distinct Typographic Groups with Intentional Vertical Rhythm */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-7xl mx-auto my-auto w-full px-2">
          {/* GROUP 1: ENGINEERING RIGOR. */}
          <div className="flex flex-col items-center mb-6 md:mb-10 lg:mb-12">
            <h2 className="font-display font-black text-brand-white uppercase leading-[0.88] tracking-brutal text-[clamp(2.75rem,8.2vw,7.8rem)] m-0 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              ENGINEERING
            </h2>
            <span className="font-display font-black text-brand-white uppercase leading-[0.88] tracking-brutal text-[clamp(2.75rem,8.2vw,7.8rem)] mt-1 md:mt-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              RIGOR.
            </span>
          </div>

          {/* Intentional Architectural Separator */}
          <div className="flex items-center justify-center gap-4 my-2 md:my-4 opacity-40">
            <span className="w-12 md:w-20 h-[1px] bg-brand-red"></span>
            <span className="font-mono text-[10px] text-brand-red tracking-widest uppercase font-bold">X</span>
            <span className="w-12 md:w-20 h-[1px] bg-brand-red"></span>
          </div>

          {/* GROUP 2: COMMUNITY HEART. with controlled, tactile glitch */}
          <div className="flex flex-col items-center mt-6 md:mt-10 lg:mt-12">
            <GlitchText as="div" className="leading-[0.88] text-[clamp(2.75rem,8.2vw,7.8rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              <span className="text-brand-red italic block">COMMUNITY</span>
            </GlitchText>
            <GlitchText as="div" className="leading-[0.88] text-[clamp(2.75rem,8.2vw,7.8rem)] mt-1 md:mt-2 drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
              <span className="text-brand-red italic block">HEART.</span>
            </GlitchText>
          </div>

          {/* Contextual Narrative Support */}
          <p className="font-sans text-sm md:text-lg text-brand-white/80 max-w-2xl mx-auto mt-10 md:mt-16 leading-relaxed font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Ready to integrate high-velocity software engineering teams (PFE) or lead grassroots community projects (ESC).
          </p>
        </div>

        {/* Bottom Technical Telemetry Coordinate */}
        <div className="relative z-10 flex justify-between items-center text-[9px] md:text-[10px] font-mono text-white/40 pt-8 border-t border-white/10 max-w-7xl mx-auto w-full">
          <span>LAT: 36.8065° N / LON: 10.1815° E</span>
          <span className="text-brand-red">STATUS // FULLY_PREPARED</span>
          <span className="hidden sm:inline">ESPRIT TWIN 2025</span>
        </div>
      </section>

      {/* 7. Industrial Ticker Banner — Seamless Loop, Vertically Centered, No Clipping */}
      <div 
        className="bg-brand-red py-4 md:py-5 min-h-[4.5rem] md:min-h-[5.5rem] overflow-hidden border-y-2 border-brand-black flex items-center relative z-20 select-none shadow-[0_0_30px_rgba(255,0,0,0.25)]"
        aria-label="Industrial ticker announcement"
      >
        <div className="flex w-max items-center">
          {/* Track 1 */}
          <div className="flex items-center flex-shrink-0 animate-ticker motion-reduce:animate-none">
            {INDUSTRIAL_TICKER_TEXT.concat(INDUSTRIAL_TICKER_TEXT).map((text, i) => (
              <span 
                key={`track1-${i}`} 
                className="font-display font-black text-xl md:text-3xl lg:text-4xl mx-8 md:mx-12 text-brand-black uppercase italic tracking-brutal flex items-center gap-6 leading-tight whitespace-nowrap"
              >
                <span>{text}</span>
                <span className="text-brand-black/60 font-sans not-italic text-sm md:text-xl font-normal select-none">///</span>
              </span>
            ))}
          </div>

          {/* Track 2 for 100% seamless infinite looping */}
          <div className="flex items-center flex-shrink-0 animate-ticker motion-reduce:animate-none" aria-hidden="true">
            {INDUSTRIAL_TICKER_TEXT.concat(INDUSTRIAL_TICKER_TEXT).map((text, i) => (
              <span 
                key={`track2-${i}`} 
                className="font-display font-black text-xl md:text-3xl lg:text-4xl mx-8 md:mx-12 text-brand-black uppercase italic tracking-brutal flex items-center gap-6 leading-tight whitespace-nowrap"
              >
                <span>{text}</span>
                <span className="text-brand-black/60 font-sans not-italic text-sm md:text-xl font-normal select-none">///</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 8. Direct Contact CTA Module */}
      <section className="py-24 px-6 md:px-12 bg-brand-black text-center">
        <div className="max-w-4xl mx-auto">
          <Text variant="label" className="mb-4 text-brand-red tracking-technical">
            NEXT_ACTION // TRANSMISSION_READY
          </Text>
          <Text variant="hero" className="text-4xl md:text-7xl mb-6">
            INITIATE <span className="text-brand-red italic">CONTACT</span>
          </Text>
          <p className="font-sans text-base md:text-lg text-brand-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you represent an innovative engineering company seeking a PFE intern or an ESC organization building European solidarity, let's connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" className="text-sm px-10 py-5">
                Transmit PFE / ESC Proposal →
              </Button>
            </Link>
            <a href={`mailto:${PROFILE.email}`}>
              <Button variant="outline" className="text-sm px-10 py-5">
                Direct Email: {PROFILE.email}
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
