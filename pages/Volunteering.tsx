import React from 'react';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import { VOLUNTEERING_DATA, ESC_MOTIVATIONS } from '../constants';

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
          {VOLUNTEERING_DATA.description}
        </p>

        {/* Key ESC Profile Tags */}
        <div className="flex flex-wrap gap-3 border-y border-white/10 py-6">
          <span className="font-mono text-xs px-3 py-1.5 bg-brand-red/10 border border-brand-red text-brand-red">
            INTERESTED IN ESC VOLUNTEERING
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
                alt="Illustrative boxing gloves — not a photograph of Champion Boxing Club or my volunteering"
                aspectRatio="aspect-[4/3] md:aspect-[16/11]"
                className="filter grayscale contrast-125"
              />
              <div className="absolute top-4 left-4 bg-black/90 px-3 py-1.5 border border-white/10 font-mono text-[9px] text-brand-red">
                ILLUSTRATIVE IMAGE // UNSPLASH
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/90 p-2.5 border border-white/10 backdrop-blur-md">
                <span className="font-mono text-[10px] text-white/75 uppercase tracking-widest block">
                  BOXING EQUIPMENT // NOT AN ACTIVITY PHOTOGRAPH
                </span>
              </div>
            </div>

            {/* Space for Authentic Activity Photographs */}
            <div className="p-6 border border-dashed border-white/20 bg-brand-gray/20 space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[9px] text-brand-red uppercase tracking-widest">
                  COMMUNITY EXPERIENCE
                </span>
                <span className="font-mono text-[10px] text-white/70">
                  MARWEN JEMAI
                </span>
              </div>
              <p className="font-sans text-xs text-brand-white/60 leading-relaxed font-light">
                Alongside my own kickboxing training, I volunteered to assist the head coach with beginner guidance, group activities and training preparation, supporting participants of different ages.
              </p>
            </div>

            <div className="p-6 bg-brand-gray border border-white/10 space-y-4">
              <Text variant="mono" className="text-brand-red text-xs">EXPERIENCE_DETAILS</Text>
              <h2 className="font-display text-xl font-bold uppercase">{VOLUNTEERING_DATA.title}</h2>
              <dl className="space-y-3 text-xs font-mono">
                {[
                  ['Organization', VOLUNTEERING_DATA.title],
                  ['Role', VOLUNTEERING_DATA.role],
                  ['Period', VOLUNTEERING_DATA.period],
                  ['Location', VOLUNTEERING_DATA.location],
                  ['Frequency', '5 sessions/week (training + volunteering)']
                ].map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 sm:grid-cols-[6rem_minmax(0,1fr)] gap-1 sm:gap-3 border-b border-white/10 pb-2">
                    <dt className="text-brand-white/70 uppercase">{label}</dt>
                    <dd className="min-w-0 break-words text-brand-white">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="font-sans text-xs text-brand-white/70 leading-relaxed">These five weekly sessions combined my personal training and volunteering assistance; they were not exclusively volunteer work.</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div>
              <Text variant="label" className="text-brand-red mb-2">FIELD_NARRATIVE</Text>
              <h2 className="font-display text-3xl md:text-4xl text-brand-white uppercase font-black mb-4">
                The Community Kickboxing Experience
              </h2>
              <div className="font-sans text-base text-brand-white/80 leading-relaxed font-light space-y-4">
                <p>
                  I assisted the head coach during training, explained basic movements to beginners and helped participants correct their posture and techniques. I also supported children and older adults during exercises.
                </p>
                <p>
                  Alongside my own kickboxing practice, I prepared training equipment and helped organize groups. My attendance combined personal training with practical assistance during sessions.
                </p>
              </div>
            </div>

            {/* Core Pillars Grid */}
            <div className="space-y-5 pt-2">
              {VOLUNTEERING_DATA.corePillars.map((pillar, i) => (
                <div key={i} className="p-6 border border-white/10 bg-brand-gray/30 hover:border-brand-red/50 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-brand-red font-mono text-sm font-bold">0{i+1} //</span>
                    <h3 className="font-display font-bold text-lg text-brand-white uppercase">
                      {pillar.title}
                    </h3>
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
            <h2 className="font-display text-3xl md:text-4xl uppercase font-black text-brand-white leading-tight">
              Digital Creativity in the Community
            </h2>
          </div>
          <div className="md:col-span-8 font-sans text-base text-brand-white/70 leading-relaxed font-light space-y-3">
            <p>
              My software engineering studies and digital skills are a separate part of my background. For future ESC projects, I am interested in contributing technical and creative support and learning to help with digital activities in a host team. These are future volunteering interests, not activities I delivered at Champion Boxing Club.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Why ESC (European Solidarity Corps) Alignment */}
      <section className="bg-brand-gray/50 py-24 px-6 md:px-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <Text variant="label" className="text-brand-red mb-2">ESC_ORGANIZATION_ALIGNMENT</Text>
            <h2 className="font-display text-3xl md:text-5xl uppercase font-black tracking-tight mb-4">
              Interested in ESC Volunteering
            </h2>
            <p className="font-sans text-base text-brand-white/70 leading-relaxed font-light">
              I am interested in youth engagement, community inclusion, non-formal education and sports participation. I would like to contribute practical and digital support while learning alongside an intercultural host team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {ESC_MOTIVATIONS.map((item, idx) => (
              <div key={idx} className="p-8 border border-white/10 bg-brand-black flex flex-col justify-between">
                <div>
                  <Text variant="mono" className="text-brand-red text-xs mb-3">PILLAR_0{idx + 1}</Text>
                  <h3 className="font-display font-bold text-xl uppercase mb-4 text-brand-white">
                    {item.pillar}
                  </h3>
                  <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light">
                    {item.summary}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5">
                  <span className="font-mono text-[10px] text-brand-white/65 uppercase">
                    ESC_INTEREST // FUTURE CONTRIBUTION
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action Call to ESC Organizations */}
          <div className="mt-16 p-8 border border-brand-red bg-brand-red/10 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-6">
            <div>
              <Text variant="mono" className="text-brand-red text-xs mb-1">CALL_FOR_PARTNERSHIP</Text>
              <h3 className="font-display font-bold text-2xl uppercase text-brand-white">
                Discuss an ESC volunteering opportunity
              </h3>
              <p className="font-sans text-sm text-brand-white/70 mt-1">
                Interested in youth sports, community inclusion and digital or creative support. Contact me to discuss the activities, dates and duration.
              </p>
            </div>
            <Button to="/contact?inquiry=esc" variant="primary" className="w-full min-w-0 whitespace-normal break-words px-4 py-4 text-[11px] tracking-widest md:w-auto md:shrink-0 md:max-w-[20rem]">
              Discuss an ESC Opportunity →
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteering;
