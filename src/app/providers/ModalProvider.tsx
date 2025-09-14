import React, { createContext, useContext } from 'react';
import { useModalStore } from '@/app/stores/modalStore';

interface ModalContextType {
  isOpen: boolean;
  openModal: (code: string) => void;
  closeModal: () => void;
  navigateToProject: (code: string) => void;
  selectedProjectCode: string | null;
}

const ModalContext = createContext<ModalContextType | null>(null);

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within ModalProvider');
  }
  return context;
};

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const { isOpen, selectedProjectCode, openModal, closeModal } = useModalStore();

  const navigateToProject = (code: string) => {
    openModal(code);
  };

  const value: ModalContextType = {
    isOpen,
    selectedProjectCode,
    openModal,
    closeModal,
    navigateToProject
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
    </ModalContext.Provider>
  );
};