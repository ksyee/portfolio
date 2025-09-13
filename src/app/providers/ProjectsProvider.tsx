import React, { createContext, useContext, useEffect } from 'react';
import { useProjectsStore } from '@/app/stores/projectsStore';
import { projectsApi, type Project } from '@/entities/project';

interface ProjectsContextType {
  projects: Project[];
  isLoading: boolean;
}

const ProjectsContext = createContext<ProjectsContextType | null>(null);

export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error('useProjects must be used within ProjectsProvider');
  }
  return context;
};

interface ProjectsProviderProps {
  children: React.ReactNode;
}

export const ProjectsProvider: React.FC<ProjectsProviderProps> = ({ children }) => {
  const { projects, loadProjects } = useProjectsStore();
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsLoading(true);
        const projectsData = await projectsApi.getAll();
        loadProjects(projectsData);
      } catch (error) {
        console.error('Failed to load projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (projects.length === 0) {
      fetchProjects();
    } else {
      setIsLoading(false);
    }
  }, [projects.length, loadProjects]);

  const value: ProjectsContextType = {
    projects,
    isLoading
  };

  return (
    <ProjectsContext.Provider value={value}>
      {children}
    </ProjectsContext.Provider>
  );
};