import type { Skill } from '../model/types';

const skillsData: Skill[] = [
  {
    id: 1,
    title: 'HTML',
    image: '/src/shared/assets/skills_images/skills_html.svg',
    level: 90,
    description: 'Semantic HTML5',
  },
  {
    id: 2,
    title: 'CSS',
    image: '/src/shared/assets/skills_images/skills_css.svg',
    level: 85,
    description: 'CSS3, Flexbox, Grid',
  },
  {
    id: 3,
    title: 'JavaScript',
    image: '/src/shared/assets/skills_images/skills_javascript.svg',
    level: 90,
    description: 'ES6+, Async/Await',
  },
  {
    id: 4,
    title: 'TypeScript',
    image: '/src/shared/assets/skills_images/skills_typescript.svg',
    level: 85,
    description: 'Type-safe development',
  },
  {
    id: 5,
    title: 'React',
    image: '/src/shared/assets/skills_images/skills_react.svg',
    level: 90,
    description: 'Hooks, Context API',
  },
  {
    id: 6,
    title: 'Tailwind CSS',
    image: '/src/shared/assets/skills_images/skills_tailwindcss.svg',
    level: 95,
    description: 'Utility-first CSS',
  },
  {
    id: 7,
    title: 'Git',
    image: '/src/shared/assets/skills_images/skills_git.svg',
    level: 85,
    description: 'Version control',
  },
  {
    id: 8,
    title: 'Vite',
    image: '/src/shared/assets/skills_images/skills_vite.svg',
    level: 80,
    description: 'Build tool',
  },
];

export const skillsApi: {
  getAll: () => Promise<Skill[]>;
} = {
  async getAll(): Promise<Skill[]> {
    // 로컬 데이터를 반환하되, 비동기 동작을 유지
    return Promise.resolve(skillsData);
  },
};
