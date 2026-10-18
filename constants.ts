import { Project, ExperienceItem, VolunteeringInitiative, Language } from './types';

export const PROFILE = {
  brand: 'JEMI3I',
  name: 'Marwen Jemai',
  title: 'Software Engineering Student & Community Volunteer',
  degree: 'Fifth-year Software Engineering Student',
  institution: 'ESPRIT (École Supérieure Privée d\'Ingénierie et de Technologies)',
  specialization: 'Web and Internet Technologies (TWIN)',
  location: 'Tunis, Tunisia',
  email: 'marwen.jemai@esprit.tn',
  status: 'Open for Final-Year Engineering Internship (PFE 2026/2027) & ESC Volunteering',
  heroHeadline: ['I BUILD.', 'I CREATE.', 'I CONNECT.'],
  heroSubheadline: 'Software Engineering, Creative Technology & Community Engagement.',
  heroStatement: 'Fifth-year engineering student at ESPRIT specialized in Web & Internet Technologies (TWIN). Focused on solid web fundamentals, creative digital experiments, and grassroots community solidarity.',
};

export const NAVIGATION_LINKS = [
  { name: 'ABOUT', path: '/about' },
  { name: 'WORK', path: '/projects' },
  { name: 'IMPACT', path: '/volunteering' },
  { name: 'EXPERIENCE', path: '/experience' },
  { name: 'CONTACT', path: '/contact' }
];

export const PROJECTS: Project[] = [
  {
    id: 'gen-ai-gallery',
    projectNumber: '001',
    title: 'Generative AI Art Gallery',
    category: 'creative',
    categoryLabel: 'Creative Computing',
    subtitle: 'Interactive image generation and creative digital storytelling.',
    description: 'An interactive web showcase exploring generative artificial intelligence imagery, prompt experimentation, and responsive digital storytelling.',
    overview: 'Developed as an exploratory creative tech project at the intersection of AI models and web front-end development. The goal was to build a clean, distraction-free viewing platform tailored for high-contrast generative art compositions.',
    actualProblemOrGoal: 'Creating an intuitive, distraction-free digital exhibition platform that explores algorithmic image generation models and visual digital storytelling without generic template clutter.',
    academicContext: 'Creative Computing & Web Technologies // ESPRIT Active Pedagogy',
    verifiedImplementedFeatures: [
      'Interactive visual gallery layout displaying curated generative compositions.',
      'Client-side categorization for prompt iterations and thematic visual styles.',
      'Responsive canvas container adapting to diverse aspect ratios without distortion.',
      'High-contrast brutalist viewing mode designed for focused art appreciation.'
    ],
    verifiedTechnologies: [
      'Frontend Framework: React, TypeScript',
      'Layout & Display: HTML5 Canvas, Tailwind CSS',
      'Model Pipeline: [Generative inference API / workflow to be documented upon interview request]'
    ],
    role: 'Student Developer (Individual Project)',
    status: 'Academic & Personal Project // Prototype',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop&grayscale=true',
    mediaNote: 'Conceptual Visual Representation // Creative Study',
    featured: true,
  },
  {
    id: 'health-fitness-platform',
    projectNumber: '002',
    title: 'Health & Fitness Web Platform',
    category: 'engineering',
    categoryLabel: 'Web Development / Health & Sport',
    subtitle: 'Digital platform involving athletes, doctors and coaches.',
    description: 'A multi-stakeholder web platform designed to facilitate training consistency, medical checkpoints, and performance collaboration among athletes, doctors, and coaches.',
    overview: 'Created to solve the coordination disconnect between athletic training regimens and medical supervision. The project establishes shared and role-specific views allowing coaches to design routines, athletes to log workouts, and doctors to record physical clearance.',
    actualProblemOrGoal: 'Bridging communication and performance tracking between athletes, medical doctors, and coaches within a centralized web platform for structured wellness monitoring.',
    targetEcosystem: [
      'Athletes — Workout session logging, physical feedback, and routine consistency tracking',
      'Doctors — Health evaluations, injury rehabilitation logs, and medical clearance notes',
      'Coaches — Training program design, milestone reviews, and athlete performance over time'
    ],
    academicContext: 'Coursework & Practical Application // Web & Database Systems',
    verifiedImplementedFeatures: [
      'Relational data models connecting athletes, coaches, and medical practitioners.',
      'Dedicated views for workout logging, exercise categories, and session dates.',
      'Medical checkpoint interface for injury prevention notes and clearance updates.',
      'Responsive interface layouts tailored for quick mobile data entry in gym and clinic environments.'
    ],
    verifiedTechnologies: [
      'Frontend Architecture: React, TypeScript',
      'Data Modeling: Relational database schemas (SQL / PostgreSQL design)',
      'Backend Services: [API endpoints and authentication service to be documented upon interview]'
    ],
    role: 'Full-Stack Developer (Student Project)',
    status: 'Functional Student Project // Core Features Implemented',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop&grayscale=true',
    mediaNote: 'Conceptual Visual Representation // Multi-Stakeholder UI Study',
    featured: true,
  },
  {
    id: 'interactive-game-arduino',
    projectNumber: '003',
    title: 'Interactive Game + Arduino',
    category: 'creative',
    categoryLabel: 'Physical Computing',
    subtitle: 'Interactive project combining software, creativity and hardware.',
    description: 'A physical computing project integrating custom Arduino microcontroller inputs (buttons, physical sensors) with on-screen interactive game states via serial communication.',
    overview: 'An applied physical computing project exploring tangible hardware-software interaction. Rather than using conventional keyboard input, the game loop listens to incoming serial data sent by an Arduino microcontroller wired on a breadboard with tactile sensors.',
    actualProblemOrGoal: 'Replacing conventional keyboard/mouse gaming input with custom physical sensors, creating a tangible interactive gaming loop through serial data exchange.',
    hardwareSpecs: [
      'Microcontroller: Arduino (Embedded C++ firmware)',
      'Physical Circuit: Breadboard with tactile momentary switches and analog sensor inputs',
      'Data Transmission: USB Serial UART communication protocol running in real-time',
      'Signal Handling: Software and hardware debouncing to ensure clean trigger states'
    ],
    academicContext: 'Embedded Systems & Interactive Physical Computing Exploration',
    verifiedImplementedFeatures: [
      'Wired physical breadboard circuit prototype with tactile inputs.',
      'Embedded firmware reading sensor states and serializing packet streams.',
      'Host software interface receiving serial data and updating on-screen movement in real time.',
      'Collision handling and scoring mechanics driven directly by physical hardware triggers.'
    ],
    verifiedTechnologies: [
      'Embedded Programming: C++ / Arduino Framework',
      'Serial Protocol: USB Serial UART data communication',
      'Host Software: Interactive game loop / Web Canvas interface'
    ],
    role: 'Hardware & Software Developer (Student Project)',
    status: 'Hardware Prototype & Working Demo',
    image: 'https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1200&auto=format&fit=crop&grayscale=true',
    mediaNote: 'Conceptual Visual Representation // Physical Computing Study',
    featured: true,
  }
];

export const VOLUNTEERING_DATA: VolunteeringInitiative = {
  id: 'kickboxing-community-coaching',
  title: 'Community Kickboxing Mentorship & Coaching Support',
  role: 'Assistant Coach & Volunteer Mentor',
  focus: 'Youth Engagement, Intergenerational Inclusion & Beginner Support',
  period: '1 Year (Completed)',
  location: 'Tunis, Tunisia',
  demographics: [
    'Children & Adolescents (Discipline, coordination, anti-bullying, confidence)',
    'Older Adults (Cardiovascular health, mobility, gentle movement, social connection)',
    'Complete Beginners (Safe orientation, stress-reduction, technique basics)'
  ],
  description: 'Dedicated one full year assisting the head coach during regular community kickboxing training sessions. Actively supported children, teenagers, older adults, and newcomers by breaking down technical movements, ensuring safety, and fostering a patient, inclusive sports environment.',
  corePillars: [
    {
      title: 'Youth Engagement & Constructive Discipline',
      description: 'Worked directly with young students to channel energy into positive physical discipline, mutual respect, and sportsmanship. Helped kids build self-esteem and learn teamwork in a supportive, non-intimidating setting.'
    },
    {
      title: 'Intergenerational Inclusion & Mobility',
      description: 'Assisted older adult participants with tailored warm-ups, modified combinations, and safe conditioning drills to promote mobility, balance, and heart health without fear of injury.'
    },
    {
      title: 'Support for Beginners & Safe Onboarding',
      description: 'Served as the first point of guidance for nervous first-time attendees, patiently teaching stance, footwork, and basic mechanics to build their confidence from day one.'
    },
    {
      title: 'Digital & Creative Support for the Community',
      description: 'Applied technical and visual communication awareness to assist the training group with digital schedules, organizational communication, and creative visual notices for the community.'
    }
  ],
  escRelevance: 'Directly aligns with the European Solidarity Corps (ESC) mission: fostering social cohesion, promoting physical health and wellbeing, supporting intergenerational dialogue, and empowering youth through non-formal community engagement.',
  image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop&grayscale=true'
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-internship-zmenuvis',
    role: 'Software Development Intern',
    organization: 'Zmenuvis',
    type: 'engineering',
    period: 'Internship Duration',
    location: 'Tunisia',
    summary: 'Contributed to an academic grade-management web application, implementing database features and assisting with data management workflows.',
    details: [
      'Participated in the development of a student grade-management system.',
      'Implemented database routines and assisted with schema features for grade records.',
      'Helped develop interface views for teachers and administrators to input and review grades.',
      'Practiced code debugging, version control, and real-world development lifecycle collaboration.'
    ]
  },
  {
    id: 'exp-clothing-brand',
    role: 'Founder & Creative Director',
    organization: 'Independent Clothing Brand',
    type: 'entrepreneurship',
    period: 'February 2024 — January 2025',
    location: 'Tunis, Tunisia',
    summary: 'Founded and ran an independent clothing brand for one full year, managing visual identity, garment production, and digital customer relations.',
    details: [
      'Defined brand visual identity, typography, graphic motifs, and brutalist aesthetic direction.',
      'Coordinated fabric sourcing, prototype sampling, and production oversight with local workshops.',
      'Managed digital presence, product showcases, social channels, and direct customer communication.',
      'Developed practical autonomy, budget management, and end-to-end creative project delivery.'
    ]
  },
  {
    id: 'exp-volunteering-kickboxing',
    role: 'Assistant Coach & Volunteer Mentor',
    organization: 'Community Martial Arts Gym',
    type: 'volunteering',
    period: '1 Year Duration',
    location: 'Tunis, Tunisia',
    summary: 'Volunteered for one year assisting a kickboxing coach, supporting children, older adults, and beginners in regular community sessions.',
    details: [
      'Assisted the coach with group drills, safety supervision, and technique reinforcement.',
      'Provided 1-on-1 guidance for beginners to help them overcome anxiety and learn proper posture.',
      'Adapted training routines for older adults focusing on functional fitness, mobility, and safety.',
      'Helped cultivate an inclusive, supportive atmosphere emphasizing respect, discipline, and teamwork.'
    ]
  },
  {
    id: 'exp-education-esprit',
    role: 'Software Engineering Student (Fifth Year)',
    organization: 'ESPRIT (École Supérieure Privée d\'Ingénierie et de Technologies)',
    type: 'education',
    period: 'Current // Expected Graduation: 2026/2027',
    location: 'Tunis / Ariana, Tunisia',
    summary: 'Fifth-year engineering student completing the curriculum with a specialization in Web and Internet Technologies (TWIN).',
    details: [
      'Specializing in Web and Internet Technologies (TWIN), focusing on modern web architectures, distributed systems, and user interfaces.',
      'Project-based active learning pedagogy: solving engineering problems in multi-disciplinary team environments.',
      'Preparing for the final-year engineering graduation project (PFE) starting early 2026/2027.'
    ]
  }
];

export const LANGUAGES: Language[] = [
  {
    language: 'Arabic',
    level: 'Native',
    proficiency: 'Mother tongue, full native fluency in spoken, written, and cultural communication',
    badge: 'NATIVE'
  },
  {
    language: 'English',
    level: 'B2',
    proficiency: 'Working professional proficiency, technical documentation, global teamwork',
    badge: 'CEFR B2'
  },
  {
    language: 'French',
    level: 'B2',
    proficiency: 'Working professional proficiency, bilingual engineering coursework at ESPRIT',
    badge: 'CEFR B2'
  }
];

export const ESC_MOTIVATIONS = [
  {
    pillar: 'Solidarity in Action',
    summary: 'Commitment to using both digital creativity and sports mentoring to empower local communities and promote equity.'
  },
  {
    pillar: 'Cross-Cultural Fluency',
    summary: 'Fluent in Arabic, English, and French, ready to integrate smoothly into diverse European volunteering teams.'
  },
  {
    pillar: 'Non-Formal Education & Sports',
    summary: 'Direct experience channeling kickboxing fundamentals to teach discipline, confidence, and mutual respect to youth.'
  },
  {
    pillar: 'Digital & Creative Contribution',
    summary: 'Ready to support community initiatives with digital literacy, media design, workshop organization, and technical assistance.'
  }
];

export const INDUSTRIAL_TICKER_TEXT = [
  'MARWEN JEMAI // JEMI3I',
  'ESPRIT ENGINEERING 5TH YEAR // TWIN',
  'OPEN FOR PFE INTERNSHIP (2026/2027)',
  'EUROPEAN SOLIDARITY CORPS READY',
  'WEB TECHNOLOGIES // CREATIVE COMPUTING',
  'SPORTS FOR INCLUSION // COMMUNITY SOLIDARITY'
];
