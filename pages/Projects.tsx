import React, { useState } from 'react';
import Text from '../components/atoms/Text';
import ProjectCard from '../components/molecules/ProjectCard';
import ProjectGrid from '../components/organisms/ProjectGrid';
import { PROJECTS, PROFILE } from '../constants';
import { Link } from 'react-router-dom';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'engineering' | 'creative'>('all');

  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10 pb-12">
          <div className="max-w-3xl">
            <Text variant="mono" className="mb-3 text-brand-red flex items-center gap-3">
              <span className="w-8 h-[1px] bg-brand-red"></span>
              MODULE_ID: SYSTEMS_ARCHIVE_01
            </Text>
            <Text as="h1" variant="hero" className="text-5xl md:text-8xl mb-4 leading-none font-display">
              TECHNICAL <span className="text-brand-red italic">WORK</span>
            </Text>
            <p className="font-sans text-base md:text-lg text-brand-white/70 max-w-2xl leading-relaxed">
              Curated software systems, creative technology experiments, and physical computing prototypes built by Marwen Jemai (ESPRIT TWIN).
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 border border-white/10 p-1.5 bg-brand-gray/80">
            {(['all', 'engineering', 'creative'] as const).map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                className={`font-mono text-xs uppercase tracking-widest px-4 py-2 transition-all ${
                  filter === cat 
                    ? 'bg-brand-red text-white font-bold' 
                    : 'text-brand-white/40 hover:text-brand-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* Informational Banner for Recruiters */}
        <div className="mb-16 p-6 border-l-2 border-brand-red bg-brand-gray/40 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest block mb-1">
              NOTE FOR PFE RECRUITERS
            </span>
            <p className="font-sans text-xs md:text-sm text-brand-white/80">
              Projects demonstrate core competencies in full-stack architecture, API integration, and active problem solving. Extended technical codebases can be reviewed upon interview request.
            </p>
          </div>
          <Link to="/contact">
            <span className="font-mono text-xs text-brand-red hover:underline whitespace-nowrap">
              Inquire About PFE →
            </span>
          </Link>
        </div>

        {/* Asymmetric Brutalist Projects Grid */}
        <ProjectGrid projects={filteredProjects} />

        {/* Volunteering Link Callout */}
        <div className="mt-28 pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <Text variant="label" className="mb-2">EXPLORE_COMMUNITY_IMPACT</Text>
            <p className="font-display font-bold text-2xl uppercase text-brand-white">
              Interested in youth and community initiatives?
            </p>
            <p className="font-sans text-sm text-brand-white/60 mt-1">
              Explore my kickboxing training and volunteer coaching assistance at Champion Boxing Club, November 2024 — March 2026.
            </p>
          </div>
          <Link to="/volunteering" className="px-8 py-4 border border-white/20 hover:border-brand-red text-brand-white font-mono text-xs uppercase tracking-widest transition-all inline-block text-center">
              Go to Volunteering Dossier →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
