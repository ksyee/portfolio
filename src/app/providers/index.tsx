import React from 'react';
import { ProjectsProvider } from './ProjectsProvider';
import { ModalProvider } from './ModalProvider';
import { ScrollProvider } from './ScrollProvider';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ProjectsProvider>
      <ModalProvider>
        <ScrollProvider>
          {children}
        </ScrollProvider>
      </ModalProvider>
    </ProjectsProvider>
  );
};

export { useProjects } from './ProjectsProvider';
export { useModal } from './ModalProvider';
export { useScroll } from './ScrollProvider';