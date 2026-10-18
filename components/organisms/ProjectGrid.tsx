import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import Text from '../atoms/Text';

interface ProjectGridProps {
  projects: Project[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  if (projects.length === 0) {
    return (
      <div className="py-24 text-center border border-white/10 bg-brand-gray/30 p-12">
        <Text variant="mono" className="text-brand-red mb-2 text-xs">ARCHIVE_QUERY // ZERO_RECORDS</Text>
        <p className="font-sans text-sm text-brand-white/50">No specifications found matching the selected filter criteria.</p>
      </div>
    );
  }

  const p001 = projects.find(p => p.id === 'gen-ai-gallery');
  const p002 = projects.find(p => p.id === 'health-fitness-platform');
  const p003 = projects.find(p => p.id === 'interactive-game-arduino');

  return (
    <div className="space-y-20 md:space-y-32">
      {/* =========================================================================
          EXHIBITION 001: IMMERSIVE FULL-WIDTH VISUAL EXHIBITION
          Generative AI Art Gallery — Creative Computing
          ========================================================================= */}
      {p001 && (
        <article className="border border-white/10 bg-brand-gray/30 relative group overflow-hidden transition-colors hover:border-brand-red/60">
          {/* Top Exhibition Metadata Strip */}
          <div className="p-6 md:px-10 md:py-6 border-b border-white/10 flex flex-wrap justify-between items-center gap-4 bg-brand-black/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <span className="font-mono text-brand-red font-bold text-xs">EXHIBITION // 001</span>
              <span className="text-white/20 font-mono text-xs">///</span>
              <span className="font-mono text-xs uppercase text-brand-white/80 tracking-widest">
                {p001.categoryLabel}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 text-brand-white/60 uppercase">
                {p001.status}
              </span>
              <span className="font-mono text-[9px] px-2.5 py-1 bg-brand-red/10 border border-brand-red/40 text-brand-red uppercase">
                ACTIVE_SHOWCASE
              </span>
            </div>
          </div>

          {/* Panoramic Immersive Canvas */}
          <Link 
            to={`/project/${p001.id}`} 
            className="block relative overflow-hidden aspect-[16/9] md:aspect-[21/9] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            aria-label={`Enter exhibition for ${p001.title}`}
          >
            <img 
              src={p001.image} 
              alt={p001.title} 
              className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
              loading="lazy"
            />
            {/* Cinematic multiply scrim & dark corner vignettes */}
            <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent pointer-events-none" />
            
            {/* Conceptual Visual Disclaimer Stamp */}
            <div className="absolute top-4 right-4 pointer-events-none z-10">
              <span className="font-mono text-[8px] md:text-[9px] bg-brand-black/90 px-3 py-1.5 border border-white/15 text-white/70 uppercase tracking-widest backdrop-blur-md">
                {p001.mediaNote}
              </span>
            </div>

            {/* Hover Action HUD Overlay */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <span className="font-mono text-xs md:text-sm bg-brand-black/95 text-brand-red px-6 py-3 border border-brand-red uppercase tracking-technical shadow-[0_0_20px_rgba(255,0,0,0.4)]">
                ENTER DIGITAL EXHIBITION →
              </span>
            </div>

            {/* Bottom In-Image Typography Overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-4 z-10 pointer-events-none">
              <div>
                <span className="font-mono text-[10px] text-brand-red font-bold uppercase tracking-widest block mb-1">
                  INTERACTIVE_STORYTELLING // REF_001
                </span>
                <h3 className="font-display font-black text-3xl md:text-6xl text-brand-white uppercase leading-none tracking-tight group-hover:text-brand-red transition-colors duration-300">
                  {p001.title}
                </h3>
              </div>
              <span className="font-mono text-xs text-brand-white/80 border-b border-brand-red pb-1 self-start md:self-end">
                VIEW FULL ARCHITECTURE SPEC →
              </span>
            </div>
          </Link>

          {/* Exhibition Annotation Bar */}
          <div className="p-6 md:p-10 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-brand-black">
            <div className="md:col-span-7 space-y-2">
              <p className="font-sans text-sm md:text-base text-brand-white/80 leading-relaxed font-light">
                {p001.subtitle}
              </p>
              <p className="font-sans text-xs text-brand-white/50 leading-relaxed font-light">
                {p001.description}
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-2 md:justify-end">
              {p001.verifiedImplementedFeatures.slice(0, 3).map((feat, i) => (
                <span key={i} className="font-mono text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 text-white/70">
                  ✓ {feat.split(' ')[0]} {feat.split(' ')[1]}
                </span>
              ))}
            </div>
          </div>
        </article>
      )}

      {/* =========================================================================
          EXHIBITION 002: ASYMMETRIC SPLIT-SCREEN COMPOSITION WITH MULTI-USER ANNOTATIONS
          Health & Fitness Web Platform — Web Development / Health & Sport
          ========================================================================= */}
      {p002 && (
        <article className="border border-white/10 bg-brand-gray/30 relative group overflow-hidden transition-colors hover:border-brand-red/60">
          {/* Top Metadata Strip */}
          <div className="p-6 md:px-10 md:py-6 border-b border-white/10 flex flex-wrap justify-between items-center gap-4 bg-brand-black/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <span className="font-mono text-brand-red font-bold text-xs">EXHIBITION // 002</span>
              <span className="text-white/20 font-mono text-xs">///</span>
              <span className="font-mono text-xs uppercase text-brand-white/80 tracking-widest">
                {p002.categoryLabel}
              </span>
            </div>
            <span className="font-mono text-[9px] px-2.5 py-1 bg-white/5 border border-white/10 text-white/60 uppercase">
              MULTI-STAKEHOLDER SYSTEM
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Split: Large Media & Visual Disclaimer */}
            <div className="lg:col-span-7 relative overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 min-h-[380px] lg:min-h-[500px]">
              <Link 
                to={`/project/${p002.id}`} 
                className="block w-full h-full relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label={`View system details for ${p002.title}`}
              >
                <img 
                  src={p002.image} 
                  alt={p002.title} 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4 pointer-events-none">
                  <span className="font-mono text-[8px] md:text-[9px] bg-brand-black/90 px-3 py-1.5 border border-white/15 text-white/70 uppercase tracking-widest backdrop-blur-md">
                    {p002.mediaNote}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 pointer-events-none flex justify-between items-end">
                  <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest bg-brand-black/90 px-3 py-1 border border-brand-red/40">
                    RELATIONAL_SCHEMA_VERIFIED
                  </span>
                  <span className="font-mono text-xs text-brand-white bg-brand-black/90 px-3 py-1 border border-white/20 group-hover:border-brand-red transition-colors">
                    EXPLORE PLATFORM →
                  </span>
                </div>
              </Link>
            </div>

            {/* Right Split: Technical Annotations & Tripartite Ecosystem */}
            <div className="lg:col-span-5 p-6 md:p-10 flex flex-col justify-between bg-brand-black">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest block mb-2 font-bold">
                    SYSTEM_SPECIFICATION // 002
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-4xl text-brand-white uppercase leading-tight group-hover:text-brand-red transition-colors">
                    {p002.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-brand-white/70 mt-2 leading-relaxed font-light">
                    {p002.description}
                  </p>
                </div>

                {/* Tripartite Multi-User Stakeholder Annotations */}
                <div className="border-t border-white/10 pt-6 space-y-3">
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                    STAKEHOLDER_COLLABORATION_ROLES
                  </span>
                  
                  <div className="p-3 border border-white/10 bg-brand-gray/40">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-brand-red" />
                      <span className="font-mono text-xs font-bold uppercase text-brand-white">ATHLETES</span>
                    </div>
                    <p className="font-sans text-xs text-brand-white/60">Workout logging, recovery feedback, and session adherence metrics.</p>
                  </div>

                  <div className="p-3 border border-white/10 bg-brand-gray/40">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-white/70" />
                      <span className="font-mono text-xs font-bold uppercase text-brand-white">DOCTORS</span>
                    </div>
                    <p className="font-sans text-xs text-brand-white/60">Health evaluations, medical clearance updates, and injury notes.</p>
                  </div>

                  <div className="p-3 border border-white/10 bg-brand-gray/40">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-white/40" />
                      <span className="font-mono text-xs font-bold uppercase text-brand-white">COACHES</span>
                    </div>
                    <p className="font-sans text-xs text-brand-white/60">Program design, exercise databases, and milestone progress reviews.</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center">
                <span className="font-mono text-[10px] text-brand-white/40 uppercase">
                  AUTHOR: {p002.role}
                </span>
                <Link to={`/project/${p002.id}`} className="font-mono text-xs text-brand-red hover:underline">
                  Case Study Dossier →
                </Link>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* =========================================================================
          EXHIBITION 003: EXPERIMENTAL HARDWARE-INSPIRED PHYSICAL COMPUTING
          Interactive Game + Arduino — Physical Computing
          ========================================================================= */}
      {p003 && (
        <article className="border border-white/10 bg-brand-gray/30 relative group overflow-hidden transition-colors hover:border-brand-red/60">
          {/* Top Hardware Telemetry Strip */}
          <div className="p-6 md:px-10 md:py-6 border-b border-white/10 flex flex-wrap justify-between items-center gap-4 bg-brand-black/80 backdrop-blur-md">
            <div className="flex items-center gap-4">
              <span className="font-mono text-brand-red font-bold text-xs">EXHIBITION // 003</span>
              <span className="text-white/20 font-mono text-xs">///</span>
              <span className="font-mono text-xs uppercase text-brand-white/80 tracking-widest">
                {p003.categoryLabel}
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[9px]">
              <span className="px-2.5 py-1 bg-brand-red/10 border border-brand-red/40 text-brand-red uppercase">
                SERIAL_UART // 9600_BAUD
              </span>
              <span className="px-2.5 py-1 bg-white/5 border border-white/10 text-white/60 uppercase">
                HARDWARE_LOOP
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Detail Panel: Circuit & Microcontroller Pinouts */}
            <div className="lg:col-span-5 p-6 md:p-10 order-2 lg:order-1 flex flex-col justify-between bg-brand-black border-t lg:border-t-0 lg:border-r border-white/10">
              <div className="space-y-6">
                <div>
                  <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest block mb-2 font-bold">
                    PHYSICAL_COMPUTING // PROTOTYPE
                  </span>
                  <h3 className="font-display font-black text-2xl md:text-4xl text-brand-white uppercase leading-tight group-hover:text-brand-red transition-colors">
                    {p003.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-brand-white/70 mt-2 leading-relaxed font-light">
                    {p003.description}
                  </p>
                </div>

                {/* Industrial Hardware Circuit Specs */}
                <div className="border-t border-white/10 pt-6 space-y-3 font-mono text-xs">
                  <span className="text-white/40 uppercase tracking-widest block text-[10px]">
                    HARDWARE_INTERFACE_SCHEMATICS
                  </span>
                  
                  <div className="space-y-2">
                    {p003.hardwareSpecs?.map((spec, i) => (
                      <div key={i} className="flex items-start gap-3 p-2.5 border border-white/5 bg-brand-gray/20">
                        <span className="text-brand-red font-bold">0{i+1}_</span>
                        <span className="text-brand-white/70 font-sans text-xs">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 mt-6 flex justify-between items-center">
                <span className="font-mono text-[10px] text-brand-white/40 uppercase">
                  STATUS: {p003.status}
                </span>
                <Link to={`/project/${p003.id}`} className="font-mono text-xs text-brand-red hover:underline">
                  Hardware Specs →
                </Link>
              </div>
            </div>

            {/* Right Media Canvas */}
            <div className="lg:col-span-7 order-1 lg:order-2 relative overflow-hidden min-h-[380px] lg:min-h-[500px]">
              <Link 
                to={`/project/${p003.id}`} 
                className="block w-full h-full relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
                aria-label={`View hardware experiment details for ${p003.title}`}
              >
                <img 
                  src={p003.image} 
                  alt={p003.title} 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply opacity-0 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-4 right-4 pointer-events-none">
                  <span className="font-mono text-[8px] md:text-[9px] bg-brand-black/90 px-3 py-1.5 border border-white/15 text-white/70 uppercase tracking-widest backdrop-blur-md">
                    {p003.mediaNote}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 pointer-events-none flex justify-between items-end">
                  <span className="font-mono text-xs text-brand-red font-bold uppercase tracking-widest bg-brand-black/90 px-3 py-1 border border-brand-red/40">
                    ARDUINO // PHYSICAL_CIRCUIT
                  </span>
                  <span className="font-mono text-xs text-brand-white bg-brand-black/90 px-3 py-1 border border-white/20 group-hover:border-brand-red transition-colors">
                    VIEW HARDWARE CODE →
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </article>
      )}
    </div>
  );
};

export default ProjectGrid;
