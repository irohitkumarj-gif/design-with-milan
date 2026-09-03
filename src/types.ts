export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  isHero?: boolean;
  type?: 'cad' | 'factory' | 'product' | 'diagram' | 'comparison' | 'workshop';
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  status: string;
  organization: string;
  link?: string;
  activities: string[];
  software: string[];
  skills: string[];
  images: ProjectImage[];
  featuredMetric?: string;
  hasProcessTimeline?: boolean;
  notes?: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    isPrimary?: boolean;
  }[];
}
