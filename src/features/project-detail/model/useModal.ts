export interface ModalActions {
  onClose: () => void;
  onNextProject: () => void;
  onPrevProject: () => void;
}

export interface UseModalProps {
  hasNext: boolean;
  hasPrev: boolean;
  nextProject: { code: string } | null;
  prevProject: { code: string } | null;
  onClose: () => void;
  onNavigate: (code: string) => void;
}

export const useModal = ({ 
  hasNext, 
  hasPrev, 
  nextProject, 
  prevProject, 
  onClose, 
  onNavigate 
}: UseModalProps): ModalActions => {
  const handleNextProject = () => {
    if (hasNext && nextProject) {
      onNavigate(nextProject.code);
    }
  };

  const handlePrevProject = () => {
    if (hasPrev && prevProject) {
      onNavigate(prevProject.code);
    }
  };

  return {
    onClose,
    onNextProject: handleNextProject,
    onPrevProject: handlePrevProject
  };
};