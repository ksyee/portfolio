import {create} from 'zustand';

interface ModalState {
  isOpen: boolean;
  selectedProjectCode: string | null;
  openModal: (code: string) => void;
  closeModal: () => void;
  open: () => void;
  close: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  selectedProjectCode: null,
  openModal: (code: string) => set({isOpen: true, selectedProjectCode: code}),
  closeModal: () => set({isOpen: false, selectedProjectCode: null}),
  open: () => set({isOpen: true}),
  close: () => set({isOpen: false}),
}))