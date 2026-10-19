import React from 'react';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import { VOLUNTEERING_DATA, ESC_MOTIVATIONS, PROFILE } from '../constants';

const Volunteering: React.FC = () => {
  return (
    <div className="bg-brand-black pt-36 pb-24 text-brand-white">
      {/* 1. Header Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[1px] bg-brand-red"></span>
          <Text variant="mono" className="text-brand-red tracking-widest text-xs">
            IMPACT_DOSSIER // SOLIDARITY & COMMUNITY
          </Text>
        </div>

        <Text as="h1" variant="hero" className="text-5xl md:text-8xl mb-8 uppercase leading-none font-display">
          SOLIDARITY <br />
          <span className="text-brand-red italic">THROUGH ACTION.</span>
        </Text>

        <p className="font-sans text-lg md:text-2xl text-brand-white/80 max-w-3xl leading-relaxed font-light mb-10">
          One year of dedicated grassroots mentorship assisting a community kickboxing coach: breaking barriers for beginners, empowering children, and keeping older adults active.
        </p>

        {/* Key ESC Profile Tags */}
        <div className="flex flex-wrap gap-3 border-y border-white/10 py-6">
          <span className="font-mono text-xs px-3 py-1.5 bg-brand-red/10 border border-brand-red text-brand-red">
            EUROPEAN SOLIDARITY CORPS READY
          </span>
          <span className="font-mono text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white/80">
            YOUTH ENGAGEMENT
          </span>
          <span className="font-mono text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white/80">
            INTERGENERATIONAL INCLUSION
          </span>
          <span className="font-mono text-xs px-3 py-1.5 bg-white/5 border border-white/10 text-white/80">
            SPORTS FOR HEALTH & WELLBEING
          </span>
        </div>
      </section>

      {/* 2. Visual Storytelling & Experience Breakdown */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-6 space-y-6">
            <div className="border border-white/10 relative overflow-hidden bg-brand-gray group">
              <Image 
                src={VOLUNTEERING_DATA.image} 
                alt="Community Kickboxing Mentorship" 
                aspectRatio="aspect-[4/3] md:aspect-[16/11]"
                className="filter grayscale contrast-125"
              />
              <div className="absolute top-4 left-4 bg-black/90 px-3 py-1.5 border border-white/10 font-mono text-[9px] text-brand-red">
                LOCATION: TUNIS, TUNISIA // 1 YEAR DEDICATION
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 p-2.5 border border-white/10 backdrop-blur-md">
                <span className="font-mono text-[8px] text-white/50 uppercase tracking-widest block">
                  COMMUNITY MENTORSHIP // KICKBOXING COACHING ASSISTANT
                </span>
              </div>
            </div>

            {/* Space for Authentic Activity Photographs */}
            <div className="p-6 border border-dashed border-white/20 bg-brand-gray/20 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] text-brand-red uppercase tracking-widest">
                  COMMUNITY PHOTO ARCHIVE
                </span>
                <span className="font-mono text-[9px] text-white/40">
                  MARWEN JEMAI
                </span>
              </div>
              <p className="font-sans text-xs text-brand-white/60 leading-relaxed font-light">
                Documented training sessions with youth and older adult participants in Tunis. Personal field photos and activity logs can be shared directly with ESC coordinators.
              </p>
            </div>

            <div className="p-6 bg-brand-gray border border-white/10 space-y-4">
              <Text variant="mono" className="text-brand-red text-xs">
                VOLUNTEER_CREDENTIALS
              </Text>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">ROLE</span>
                  <span className="text-brand-white">{VOLUNTEERING_DATA.role}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">DURATION</span>
                  <span className="text-brand-white">{VOLUNTEERING_DATA.period}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40">CORE VALUES</span>
                  <span className="text-brand-white">Respect, Inclusion, Non-Violence</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40">ESC READINESS</span>
                  <span className="text-brand-red">Active Candidate (2026/2027)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div>
              <Text variant="label" className="text-brand-red mb-2">FIELD_NARRATIVE</Text>
              <h3 className="font-display text-3xl md:text-4xl text-brand-white uppercase font-black mb-4">
                The Community Kickboxing Experience
              </h3>
              <div className="font-sans text-base text-brand-white/80 leading-relaxed font-light space-y-4">
                <p>
                  {VOLUNTEERING_DATA.description}
                </p>
                <p>
                  Martial arts training in a neighborhood setting is far more than physical exercise. For children, it is a safe outlet to cultivate discipline, respect for others, and self-confidence. For older adults, it provides vital functional movement, joint mobility, and social connection.
                </p>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="space-y-5 pt-2">
              {VOLUNTEERING_DATA.corePillars.map((pillar, i) => (
                <div key={i} className="p-6 border border-white/10 bg-brand-gray/30 hover:border-brand-red/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-brand-red font-mono text-sm font-bold">0{i+1} //</span>
                    <h4 className="font-display font-bold text-lg text-brand-white uppercase">
                      {pillar.title}
                    </h4>
                  </div>
                  <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light pl-8">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Community Engagement & Digital Creativity Link */}
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4">
            <span className="font-mono text-xs text-brand-red uppercase tracking-widest block mb-2">
              SYNERGY // TECH & SOLIDARITY
            </span>
            <h3 className="font-display text-3xl md:text-4xl uppercase font-black text-brand-white leading-tight">
              Digital Creativity in the Community
            </h3>
          </div>
          <div className="md:col-span-8 font-sans text-base text-brand-white/70 leading-relaxed font-light space-y-3">
            <p>
              As a Web and Internet Technologies student with a background in creative design, I bring a unique dual capacity to volunteering missions. Beyond coaching on the mat, I can help European youth organizations build clean event schedules, design digital media, and facilitate creative workshops that make technology accessible to all backgrounds.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why ESC (European Solidarity Corps) Alignment */}
      <section className="bg-brand-gray/50 py-24 px-6 md:px-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <Text variant="label" className="text-brand-red mb-2">ESC_ORGANIZATION_ALIGNMENT</Text>
            <h3 className="font-display text-3xl md:text-5xl uppercase font-black tracking-tight mb-4">
              European Solidarity Corps Readiness
            </h3>
            <p className="font-sans text-base text-brand-white/70 leading-relaxed font-light">
              How my practical experience in sports coaching, multilingual communication, and digital creativity directly serves European host projects:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ESC_MOTIVATIONS.map((item, idx) => (
              <div key={idx} className="p-8 border border-white/10 bg-brand-black flex flex-col justify-between">
                <div>
                  <Text variant="mono" className="text-brand-red text-xs mb-3">PILLAR_0{idx + 1}</Text>
                  <h4 className="font-display font-bold text-xl uppercase mb-4 text-brand-white">
                    {item.pillar}
                  </h4>
                  <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-[9px] text-brand-white/30 uppercase">
                    ESC_PRIORITY // ACTIVE
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Call to ESC Organizations */}
          <div className="mt-16 p-8 border border-brand-red bg-brand-red/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <Text variant="mono" className="text-brand-red text-xs mb-1">CALL_FOR_PARTNERSHIP</Text>
              <h4 className="font-display font-bold text-2xl uppercase text-brand-white">
                Looking for an enthusiastic, multilingual ESC volunteer?
              </h4>
              <p className="font-sans text-sm text-brand-white/70 mt-1">
                Available for youth sports projects, community inclusion, and digital creativity workshops across Europe.
              </p>
            </div>
            <Button to="/contact" variant="primary" className="whitespace-nowrap">
              Submit ESC Opportunity →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteering;
