import { create } from 'zustand';
import { Database } from '@/types/supabase';

type Project = Database['public']['Tables']['projects']['Row'];

interface ProjectState {
  projects: Project[];
  loadProjects: (projects: Project[]) => void;
}

export const useProjectsStore = create<ProjectState>((set) => ({
  projects: [],
  loadProjects: (projects) => set({projects}),
}))