export interface Project {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  stacks: string[];
  anotherStacks: string[];
  liveLink: string;
  githubLink: string;
}

export interface Skill {
  id: number;
  name: string;
  image: string;
  description: string;
  level: string;
}
