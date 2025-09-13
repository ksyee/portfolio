import type { Project } from '../model/types';
import projectData from '@/shared/assets/project_data.json';

// 로컬 데이터를 Project 타입으로 변환
const projectsData: Project[] = projectData.map((project) => ({
  ...project,
  id: project.code, // code를 id로도 사용
  thumbnail: `/src/shared/assets/project_thumbnails/${project.code}.png`, // 로컬 이미지 경로
}));

export const projectsApi: {
  getAll: () => Promise<Project[]>;
  getByCode: (code: string) => Promise<Project | null>;
} = {
  async getAll(): Promise<Project[]> {
    // 로컬 데이터를 반환하되, 비동기 동작을 유지
    return Promise.resolve(projectsData);
  },

  async getByCode(code: string): Promise<Project | null> {
    const project = projectsData.find((p) => p.code === code);
    return Promise.resolve(project || null);
  }
};