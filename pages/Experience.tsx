import React, { useState } from 'react';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import { EXPERIENCES, LANGUAGES, PROFILE } from '../constants';
import { Link } from 'react-router-dom';

const Experience: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'engineering' | 'entrepreneurship' | 'volunteering' | 'education'>('all');

  const filteredExperiences = filter === 'all' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(exp => exp.type === filter);

  return (
    <div className="bg-brand-black pt-36 pb-24 text-brand-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Section */}
        <header className="mb-20 border-b border-white/10 pb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[1px] bg-brand-red"></span>
              <Text variant="mono" className="text-brand-red tracking-widest text-xs">
                TIMELINE // VERIFIED_CHRONOLOGY
              </Text>
            </div>
            <Text variant="hero" className="text-5xl md:text-8xl uppercase leading-none font-display">
              TRACK <span className="text-brand-red italic">RECORD</span>
            </Text>
            <p className="font-sans text-base md:text-lg text-brand-white/70 max-w-2xl mt-4 leading-relaxed font-light">
              Chronological milestones across engineering internships, entrepreneurial brand-building, community coaching, and academic formation at ESPRIT.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 border border-white/10 p-1.5 bg-brand-gray/80">
            {(['all', 'engineering', 'entrepreneurship', 'volunteering', 'education'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`font-mono text-[10px] md:text-xs uppercase tracking-widest px-3 py-1.5 transition-all ${
                  filter === tab 
                    ? 'bg-brand-red text-white font-bold' 
                    : 'text-brand-white/40 hover:text-brand-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </header>

        {/* Timeline Stack */}
        <div className="space-y-12">
          {filteredExperiences.map((exp, index) => (
            <div 
              key={exp.id} 
              className="p-8 md:p-12 border border-white/10 bg-brand-gray/30 hover:border-brand-red/60 transition-colors relative group"
            >
              {/* Type & Period Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-brand-red text-xs font-bold">
                    0{index + 1} //
                  </span>
                  <span className="font-mono text-[10px] uppercase px-2.5 py-1 bg-white/5 border border-white/10 text-brand-white">
                    {exp.type}
                  </span>
                  <span className="font-mono text-xs text-white/50">
                    {exp.location}
                  </span>
                </div>
                <span className="font-mono text-xs text-brand-red font-bold">
                  {exp.period}
                </span>
              </div>

              {/* Role & Org */}
              <div className="mb-6">
                <h3 className="font-display text-2xl md:text-4xl text-brand-white uppercase font-black mb-1 group-hover:text-brand-red transition-colors">
                  {exp.role}
                </h3>
                <span className="font-sans text-lg text-brand-white/80 font-medium">
                  {exp.organization}
                </span>
              </div>

              {/* Summary */}
              <p className="font-sans text-base text-brand-white/70 leading-relaxed font-light mb-8 max-w-3xl">
                {exp.summary}
              </p>

              {/* Bullet Details */}
              <div className="border-t border-white/5 pt-6">
                <Text variant="mono" className="text-white/40 text-[10px] mb-4">
                  DOCUMENTED_ACTIVITIES & IMPACT
                </Text>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 font-sans text-xs md:text-sm text-brand-white/70 leading-relaxed">
                      <span className="text-brand-red font-mono pt-0.5">▸</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Language Matrix */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="mb-12">
            <Text variant="label" className="text-brand-red mb-2">VERIFIED_COMPETENCIES</Text>
            <h3 className="font-display text-3xl md:text-4xl uppercase font-black">
              Language Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LANGUAGES.map(lang => (
              <div key={lang.language} className="p-8 border border-white/10 bg-brand-gray/40">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-display text-2xl font-bold uppercase">{lang.language}</span>
                  <span className="font-mono text-xs px-2.5 py-1 bg-brand-red/10 border border-brand-red text-brand-red font-bold">
                    {lang.badge}
                  </span>
                </div>
                <p className="font-sans text-sm text-brand-white/60 font-light">
                  {lang.proficiency}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA to Transmission */}
        <div className="mt-20 p-8 border border-white/10 bg-brand-gray/40 text-center max-w-3xl mx-auto">
          <Text variant="mono" className="text-brand-red text-xs mb-2">NEXT_STEPS</Text>
          <h4 className="font-display font-bold text-2xl uppercase mb-4">
            Need Full Resume or Verification Documents?
          </h4>
          <p className="font-sans text-sm text-brand-white/70 mb-6 font-light">
            Academic transcripts, internship certificates, or volunteering verification can be transmitted directly upon request.
          </p>
          <Link to="/contact">
            <Button variant="primary">
              Contact Marwen Jemai →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
