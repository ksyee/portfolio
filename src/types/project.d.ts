export interface ProjectLink {
  github: string;
  web: string;
}

export interface ProjectPeriod {
  start: string[];
  end: string[];
}

export interface ProjectContribution {
  title: string;
  hasLink?: string;
  contents?: string[];
}

export interface ProjectTrouble {
  title: string;
  contents: {
    problem: string[];
    solution: string[];
  };
}

export interface Project {
  code: string;
  title: string;
  link: ProjectLink;
  keywords: string[];
  period: ProjectPeriod;
  member: string;
  contribution: number;
  thumbnail: string;
  intro: string[];
  features: string[];
  stack: string[];
  contribute: ProjectContribution[];
  trouble: ProjectTrouble[];
}