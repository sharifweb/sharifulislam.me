/**
 * Types for Md. Shariful Islam's Portfolio
 */

export interface OdommoProgramme {
  id: string;
  title: string;
  description: string;
  sdgs: {
    number: number;
    name: string;
  }[];
  category: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  hoursPerWeek: number;
  startDate: string;
  endDate: string;
  highlights: string[];
  skills: string[];
}

export interface ExchangeProgram {
  id: string;
  country: string;
  flag: string;
  dates: string;
  programName: string;
  institution: string;
  coverage: string;
  outcome: string;
  isVirtual?: boolean;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  dates: string;
  grade: string;
  highlights?: string;
}

export interface ResearchItem {
  id: string;
  title: string;
  institution: string;
  year: string;
  description: string;
  sdgs: string[];
  statusBadge?: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface HonorItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description?: string;
}

export interface GalleryMoment {
  id: string;
  caption: string;
  location: string;
  year: string;
  imageTheme: string; // Used to style the placeholder visually (SVG details, colors)
}
