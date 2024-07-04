// 기본 타입 정의
type DateTuple = [string, string, string];
type URL = string;

// 공통 타입 정의
export interface Link {
  github: URL;
  web: URL;
}

export interface Period {
  start: DateTuple;
  end: DateTuple;
}

export interface Contribution {
  title: string;
  hasLink?: URL;
  contents?: string[];
}

export interface TroubleContent {
  problem: string[];
  solution: string[];
}

export interface Trouble {
  title: string;
  contents: TroubleContent;
}

// 프로젝트 타입 정의
export interface Project {
  id: number;
  code: string;
  color: string;
  title: string;
  link: Link;
  keywords: string[];
  period: Period;
  member: string;
  contribution: number;
  github_link: URL;
  web_link: URL;
  thumbnail: URL;
  intro: string[];
  features: string[];
  stack: string[];
  contribute: Contribution[];
  trouble: Trouble[];
  retrospect: string[];
}
