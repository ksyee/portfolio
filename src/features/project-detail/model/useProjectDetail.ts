import { useMemo } from 'react';
import type { Project } from '@/entities/project';

export interface UseProjectDetailProps {
  projects: Project[];
  code: string;
}

export const useProjectDetail = ({ projects, code }: UseProjectDetailProps) => {
  const project = useMemo(() => {
    return projects.find(project => project.code === code);
  }, [projects, code]);

  const projectIndex = useMemo(() => {
    return projects.findIndex(project => project.code === code);
  }, [projects, code]);

  const hasNext = projectIndex < projects.length - 1;
  const hasPrev = projectIndex > 0;
  
  const nextProject = hasNext ? projects[projectIndex + 1] : null;
  const prevProject = hasPrev ? projects[projectIndex - 1] : null;

  return {
    project,
    projectIndex,
    hasNext,
    hasPrev,
    nextProject,
    prevProject
  };
};