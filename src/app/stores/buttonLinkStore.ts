import { create } from 'zustand';

interface ButtonLinkState {
  buttonLink: string[];
  setButtonLink: (link: string[]) => void;
}

export const useButtonLinkStore = create<ButtonLinkState>((set) => ({
  buttonLink: [],
  setButtonLink: (link: string[]) => set({ buttonLink: link }),
}))
