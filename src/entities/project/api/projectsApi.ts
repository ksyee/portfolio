import type { Project } from '../model/types';
import projectData from '@/shared/assets/project_data.json';

// 로컬 데이터를 Project 타입으로 변환
const projectsData: Project[] = projectData.map(
  (project, index) =>
    ({
      ...project,
      id: index + 1, // 순차적인 숫자 ID
      thumbnail: `/images/project_thumbnails/${project.code}.png`, // public 폴더 이미지 경로
      github_link: project.link?.github || '', // JSON 데이터에서 가져오기
      web_link: project.link?.web || '', // JSON 데이터에서 가져오기
      link: project.link || { github: '', web: '' }, // JSON 데이터 유지
      color: project.color || '#06b6d4', // 기본 색상
    }) as Project
);

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
  },
};
