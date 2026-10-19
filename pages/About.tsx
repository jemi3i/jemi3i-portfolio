import React from 'react';
import Text from '../components/atoms/Text';
import Button from '../components/atoms/Button';
import Image from '../components/atoms/Image';
import { PROFILE, LANGUAGES, EXPERIENCES } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-brand-black pt-36 pb-24 text-brand-white">
      {/* 1. Header & Identity Section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-28">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-10 h-[1px] bg-brand-red"></span>
          <Text variant="mono" className="text-brand-red tracking-widest text-xs">
            BIOGRAPHY // MARWEN JEMAI
          </Text>
        </div>

        <Text as="h1" variant="hero" className="text-5xl md:text-8xl mb-12 uppercase leading-none font-display">
          ENGINEER. <br />
          <span className="text-brand-red italic">CREATOR. CITIZEN.</span>
        </Text>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-display text-2xl md:text-4xl text-brand-white uppercase leading-snug">
              Fifth-year Software Engineering Student at ESPRIT, Tunisia, bridging resilient full-stack systems and human-centered community impact.
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-brand-white/70 leading-relaxed font-light">
              <p>
                My engineering path is rooted in <span className="text-brand-white font-medium">ESPRIT (École Supérieure Privée d'Ingénierie et de Technologies)</span>, specializing in <span className="text-brand-red font-medium">Web and Internet Technologies (TWIN)</span>. I believe modern software should not be sterile or distant; it requires architectural rigor on the back end, expressive beauty on the front end, and a clear social heartbeat.
              </p>
              <p>
                From building database features and student management systems during my internship at <span className="text-brand-white font-medium">Zmenuvis</span> to founding and directing an independent clothing brand from early 2024 to early 2025, I combine technical discipline with creative entrepreneurial autonomy.
              </p>
              <p>
                Simultaneously, my one-year dedication to assisting a community kickboxing coach taught me that real leadership begins with listening, supporting beginners, and creating safe, welcoming spaces for children and older adults alike.
              </p>
            </div>

            <div className="pt-6 flex flex-wrap gap-4">
              <Button to="/contact" variant="primary">
                Inquire for PFE Internship →
              </Button>
              <Button to="/volunteering" variant="outline">
                View Volunteering Record
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="border border-white/10 overflow-hidden bg-brand-gray relative group">
              <Image 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop&grayscale=true" 
                alt="Marwen Jemai Professional Overview" 
                aspectRatio="aspect-[4/5]"
                className="filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-brand-red/10 mix-blend-multiply pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-brand-black/90 p-4 border border-white/10 backdrop-blur-md">
                <span className="font-mono text-[9px] text-brand-red tracking-widest uppercase block mb-1">
                  CURRENT LOCATION // FOCUS
                </span>
                <span className="font-display font-bold text-sm text-brand-white block">
                  Tunis, Tunisia → Seeking PFE & European Solidarity Missions
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Educational Pillar Section */}
      <section className="bg-brand-gray/60 py-24 px-6 md:px-12 border-y border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <Text variant="label" className="text-brand-red mb-2">ACADEMIC_EXCELLENCE</Text>
            <h3 className="font-display text-3xl md:text-5xl uppercase font-black tracking-tight">
              ESPRIT Software Engineering // TWIN
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-white/10 bg-brand-black">
              <Text variant="mono" className="text-brand-red mb-3">01 // PEDAGOGY</Text>
              <h4 className="font-display font-bold text-xl uppercase mb-3">Active Pedagogy</h4>
              <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light">
                Trained under ESPRIT's project-based curriculum, solving real-world software problems through team sprints, requirements analysis, and iterative software engineering.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-brand-black">
              <Text variant="mono" className="text-brand-red mb-3">02 // SPECIALIZATION</Text>
              <h4 className="font-display font-bold text-xl uppercase mb-3">Web & Internet (TWIN)</h4>
              <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light">
                Deep focus on modern full-stack architectures, interactive web client applications, distributed services, databases, and secure web protocols.
              </p>
            </div>

            <div className="p-8 border border-white/10 bg-brand-black">
              <Text variant="mono" className="text-brand-red mb-3">03 // PFE OBJECTIVE</Text>
              <h4 className="font-display font-bold text-xl uppercase mb-3">Graduation Internship</h4>
              <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light">
                Actively seeking a 4-to-6-month final-year internship (PFE) starting early 2026/2027 to contribute to ambitious production software environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Documented Languages & Competencies */}
      <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <Text variant="label" className="text-brand-red mb-2">COMMUNICATION_CHANNELS</Text>
          <h3 className="font-display text-3xl md:text-5xl uppercase font-black tracking-tight">
            Documented Languages
          </h3>
          <p className="font-sans text-sm md:text-base text-brand-white/60 mt-2 max-w-xl">
            Verified language proficiencies supporting effective international engineering teams and multicultural ESC volunteering missions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LANGUAGES.map(lang => (
            <div key={lang.language} className="p-8 border border-white/10 bg-brand-gray/40 hover:border-brand-red transition-colors group">
              <div className="flex justify-between items-center mb-6">
                <Text variant="title" className="text-2xl group-hover:text-brand-red transition-colors">
                  {lang.language}
                </Text>
                <span className="font-mono text-[10px] px-2.5 py-1 bg-brand-red/10 border border-brand-red/30 text-brand-red font-bold">
                  {lang.badge}
                </span>
              </div>
              <p className="font-mono text-xs text-brand-white/40 mb-2 uppercase">
                Proficiency: {lang.level}
              </p>
              <p className="font-sans text-sm text-brand-white/70 leading-relaxed font-light">
                {lang.proficiency}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Brutalist Red Impact Statement */}
      <section className="bg-brand-red py-24 px-6 md:px-12 text-black">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <Text variant="mono" className="text-black font-bold tracking-widest text-xs">
            VALUES // SOLIDARITY & INTEGRITY
          </Text>
          <Text variant="hero" className="text-5xl md:text-8xl text-black leading-none font-black uppercase">
            RIGOR IN CODE. <br />EMPATHY IN ACTION.
          </Text>
          <p className="font-sans text-lg md:text-xl text-black/90 max-w-2xl mx-auto font-medium">
            "Whether optimizing query performance for student academic data or adjusting pads for a 60-year-old beginner in the gym, the standard is unwavering: patience, clarity, and respect."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
