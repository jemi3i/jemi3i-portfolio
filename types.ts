export type ProjectCategory = 'all' | 'engineering' | 'creative';
export type PortfolioTrack = 'all' | 'engineering' | 'volunteering';

export interface Project {
  id: string;
  projectNumber: string; // '001', '002', '003'
  title: string;
  category: 'engineering' | 'creative';
  categoryLabel: string;
  subtitle: string;
  description: string;
  overview: string;
  actualProblemOrGoal: string;
  verifiedImplementedFeatures: string[];
  verifiedTechnologies: string[];
  targetEcosystem?: string[]; // for multi-stakeholder e.g. Athletes, Doctors, Coaches
  hardwareSpecs?: string[]; // for physical computing e.g. Arduino, serial communication
  role: string;
  status: string;
  image: string;
  mediaNote?: string;
  academicContext?: string;
  featured: boolean;
  demoUrl?: string;
  repoUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  type: 'engineering' | 'entrepreneurship' | 'volunteering' | 'education';
  period: string;
  location: string;
  summary: string;
  details: string[];
}

export interface VolunteeringInitiative {
  id: string;
  title: string;
  role: string;
  focus: string;
  period: string;
  location: string;
  demographics: string[];
  description: string;
  corePillars: {
    title: string;
    description: string;
  }[];
  escRelevance: string;
  image: string;
}

export interface Language {
  language: string;
  level: string;
  proficiency: string;
  badge: string;
}
