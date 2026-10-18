import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../../types';
import Image from '../atoms/Image';
import Text from '../atoms/Text';

interface ProjectCardProps {
  project: Project;
  layoutVariant?: 'standard' | 'wide' | 'editorial';
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, layoutVariant = 'standard' }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      className="group block focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-red"
      aria-label={`View case study for ${project.title}`}
    >
      <div className="relative mb-5 overflow-hidden border border-white/10 bg-brand-gray">
        <Image 
          src={project.image} 
          alt={project.title} 
          aspectRatio={layoutVariant === 'wide' ? 'aspect-[16/9]' : 'aspect-[4/3] md:aspect-[3/4]'} 
          className="transition-transform duration-1000 group-hover:scale-105 filter grayscale contrast-125" 
        />
        <div className="absolute top-0 left-0 w-full h-full bg-brand-red mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity" />
        
        {/* Transparent Media Disclaimer Pill */}
        <div className="absolute top-3 right-3 pointer-events-none">
          <span className="font-mono text-[8px] bg-black/85 px-2 py-1 border border-white/10 text-white/50 uppercase tracking-widest backdrop-blur-sm">
            {project.mediaNote || 'CONCEPTUAL VISUAL STUDY'}
          </span>
        </div>

        {/* Bottom Technical Status Bar */}
        <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center pointer-events-none">
          <span className="font-mono text-[9px] bg-brand-black/95 px-2.5 py-1 border border-white/10 text-brand-white">
            {project.status}
          </span>
          <span className="font-mono text-[9px] text-brand-red opacity-0 group-hover:opacity-100 transition-opacity bg-brand-black/95 px-2.5 py-1 border border-brand-red/40">
            CASE STUDY →
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-mono text-[9px] text-brand-red tracking-technical uppercase font-medium">
            {project.categoryLabel}
          </span>
          <span className="font-mono text-[9px] text-white/30 uppercase">
            REF_{project.id.toUpperCase().slice(0, 10)}
          </span>
        </div>

        <h3 className="font-display font-black text-xl md:text-3xl text-brand-white group-hover:text-brand-red transition-colors italic leading-tight uppercase">
          {project.title}
        </h3>

        <p className="font-sans text-xs md:text-sm text-brand-white/60 line-clamp-2 leading-relaxed font-light">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
