import {create} from 'zustand';

interface DetailModalState {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

export const useDetailModalStore = create<DetailModalState>((set) => ({
  isOpen: false,
  open: () => set({isOpen: true}),
  close: () => set({isOpen: false}),
}))