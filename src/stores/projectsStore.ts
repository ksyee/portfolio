import { create } from 'zustand';
import type { Project } from '@/types/project';

interface ProjectState {
  projects: Project[];
  loadProjects: (projects: Project[]) => void;
}

export const useProjectsStore = create<ProjectState>((set) => ({
  projects: [],
  loadProjects: (projects) => set({projects}),
}))