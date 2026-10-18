import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS, PROFILE } from '../constants';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-48 pb-24 px-6 text-center min-h-screen bg-brand-black flex flex-col items-center justify-center">
        <Text variant="mono" className="text-brand-red mb-4">ERROR // 404_NOT_FOUND</Text>
        <Text variant="hero" className="mb-6 text-5xl">PROJECT NOT LOCATED</Text>
        <p className="font-sans text-sm text-brand-white/60 mb-8 max-w-md">
          The requested system specification could not be located in the archive.
        </p>
        <Link to="/projects">
          <Button variant="outline">Return to Projects Archive</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-36 pb-24 px-6 md:px-12 max-w-7xl mx-auto bg-brand-black min-h-screen text-brand-white">
      {/* Breadcrumb Navigation */}
      <div className="mb-12 flex justify-between items-center border-b border-white/10 pb-6">
        <Link 
          to="/projects" 
          className="text-xs uppercase tracking-widest text-white/50 hover:text-brand-red transition-colors inline-flex items-center gap-2 font-mono"
        >
          <span>←</span> RETURN TO ARCHIVE
        </Link>
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-brand-red uppercase font-bold">
            PROJECT // {project.projectNumber}
          </span>
          <span className="text-white/20 font-mono text-xs">/</span>
          <span className="font-mono text-[10px] text-white/40 uppercase">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      {/* Main Exhibition Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Visual Exhibition & Metadata Dossier */}
        <div className="lg:col-span-6 lg:sticky lg:top-36 space-y-6">
          <div className="border border-white/10 relative overflow-hidden bg-brand-gray group">
            <Image 
              src={project.image} 
              alt={project.title} 
              aspectRatio="aspect-[4/3] md:aspect-[16/11]" 
              className="filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
            />
            {/* Visual Transparency Overlay Badge */}
            <div className="absolute top-4 left-4 bg-brand-black/90 px-3 py-1.5 border border-white/15 font-mono text-[9px] text-brand-white">
              STATUS: {project.status}
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-brand-black/90 p-3 border border-white/15 backdrop-blur-md">
              <span className="font-mono text-[8px] text-brand-white/60 uppercase tracking-widest block font-medium">
                VISUAL TRANSPARENCY: {project.mediaNote || 'CONCEPTUAL VISUAL STUDY'}
              </span>
            </div>
          </div>

          {/* Technical Specs & Documented Technologies Box */}
          <div className="p-6 md:p-8 bg-brand-gray/40 border border-white/10 space-y-5">
            <Text variant="mono" className="text-brand-red text-xs font-bold">
              SPECIFICATION_METADATA // 00{project.projectNumber}
            </Text>
            
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-white/40 block text-[10px]">MY ROLE</span>
                <span className="text-brand-white font-medium">{project.role}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">CATEGORY</span>
                <span className="text-brand-white font-medium">{project.categoryLabel}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">INSTITUTION</span>
                <span className="text-brand-white font-medium">ESPRIT (TWIN)</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px]">ACADEMIC CONTEXT</span>
                <span className="text-white/70 font-sans text-xs">{project.academicContext}</span>
              </div>
            </div>

            {/* Verified Technologies List */}
            <div className="border-t border-white/10 pt-4 space-y-2">
              <span className="font-mono text-[10px] text-white/50 uppercase tracking-widest block font-bold">
                VERIFIED TECHNOLOGIES & TOOLS:
              </span>
              <ul className="space-y-1.5 font-sans text-xs text-brand-white/80">
                {project.verifiedTechnologies.map((tech, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brand-red font-mono pt-0.5">▸</span>
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Code Repository Note */}
            <div className="border-t border-white/10 pt-4">
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest block mb-1">
                CODE REPOSITORY & LIVE DEMO
              </span>
              <p className="font-sans text-xs text-white/70 italic leading-relaxed">
                {project.repoUrl ? (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="text-brand-red underline">
                    View Verified GitHub Repository →
                  </a>
                ) : (
                  '[Academic & Personal Project: Full source code walkthrough, circuit diagrams, and live preview available upon direct interview request]'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: In-Depth Engineering Narrative */}
        <div className="lg:col-span-6 flex flex-col space-y-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-brand-red text-xs font-bold">PROJECT_{project.projectNumber}</span>
              <span className="text-white/20 font-mono text-xs">///</span>
              <span className="font-mono text-xs text-white/60 uppercase">{project.categoryLabel}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-black text-brand-white uppercase tracking-tight mb-4 leading-none">
              {project.title}
            </h1>
            <p className="font-sans text-lg md:text-xl text-brand-white/80 italic leading-relaxed">
              "{project.subtitle}"
            </p>
          </div>

          {/* 1. Project Introduction */}
          <div className="border-t border-white/10 pt-6 space-y-3">
            <Text variant="label" className="text-brand-red">01 // PROJECT INTRODUCTION</Text>
            <p className="font-sans text-base text-brand-white/80 leading-relaxed font-light">
              {project.overview}
            </p>
          </div>

          {/* 2. Actual Problem or Goal */}
          <div className="border-t border-white/10 pt-6 space-y-3">
            <Text variant="label" className="text-brand-red">02 // ACTUAL PROBLEM & GOAL</Text>
            <div className="p-4 border-l-2 border-brand-red bg-brand-gray/30">
              <p className="font-sans text-sm md:text-base text-brand-white/90 leading-relaxed font-light">
                {project.actualProblemOrGoal}
              </p>
            </div>
          </div>

          {/* Special Multi-Stakeholder Target Ecosystem (if Project 002) */}
          {project.targetEcosystem && (
            <div className="border-t border-white/10 pt-6 space-y-3">
              <Text variant="label" className="text-white">MULTI-STAKEHOLDER ECOSYSTEM</Text>
              <div className="space-y-2">
                {project.targetEcosystem.map((item, idx) => (
                  <div key={idx} className="p-3 border border-white/10 bg-brand-gray/20 font-sans text-xs text-brand-white/80">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special Hardware Specifications (if Project 003) */}
          {project.hardwareSpecs && (
            <div className="border-t border-white/10 pt-6 space-y-3">
              <Text variant="label" className="text-white">PHYSICAL COMPUTING SPECIFICATIONS</Text>
              <div className="space-y-2">
                {project.hardwareSpecs.map((spec, idx) => (
                  <div key={idx} className="p-3 border border-white/10 bg-brand-gray/20 font-mono text-xs text-brand-white/80">
                    <span className="text-brand-red mr-2">SYS_{idx+1}:</span> {spec}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Verified Implemented Features */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <Text variant="label" className="text-brand-red">03 // VERIFIED IMPLEMENTED FEATURES</Text>
            <ul className="space-y-3">
              {project.verifiedImplementedFeatures.map((item, i) => (
                <li key={i} className="flex items-start gap-3 font-sans text-sm text-brand-white/80 leading-relaxed">
                  <span className="text-brand-red font-mono text-xs font-bold pt-0.5">0{i+1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Recruiter / Evaluator Call to Action */}
          <div className="border-t border-white/10 pt-8 mt-4 space-y-6">
            <div className="p-5 bg-brand-red/10 border border-brand-red/40">
              <span className="font-mono text-[10px] text-brand-red uppercase tracking-widest block mb-1 font-bold">
                PFE INTERVIEW & TECHNICAL EVALUATION ACCESS
              </span>
              <p className="font-sans text-xs text-brand-white/85 leading-relaxed">
                Detailed architecture source code, repository commits, physical hardware demonstrations, and technical design documents are readily presented during interview discussions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="flex-1">
                <Button fullWidth variant="primary" className="py-4 text-xs font-mono">
                  Discuss This Project for PFE →
                </Button>
              </Link>
              <a href={`mailto:${PROFILE.email}?subject=Inquiry regarding Project ${project.projectNumber}: ${project.title}`} className="flex-1">
                <Button fullWidth variant="outline" className="py-4 text-xs font-mono">
                  Direct Email Inquiry
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
