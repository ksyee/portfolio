import { create } from 'zustand';

interface ScrollState {
  scrollY: number;
  targetScrollY: number;
  isScrolling: boolean;
  scrollToTop: () => void;
  scrollToTarget: (target: number) => void;
  setScrollY: (scrollY: number) => void;
  setTargetScrollY: (target: number) => void;
  setIsScrolling: (isScrolling: boolean) => void;
}

export const useScrollStore = create<ScrollState>((set) => ({
  scrollY: 0,
  targetScrollY: 0,
  isScrolling: false,
  scrollToTop: () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    set({ targetScrollY: 0, isScrolling: true });
  },
  scrollToTarget: (target: number) => {
    window.scrollTo({ top: target, behavior: 'smooth' });
    set({ targetScrollY: target, isScrolling: true });
  },
  setScrollY: (scrollY: number) => set({ scrollY }),
  setTargetScrollY: (target: number) => set({ targetScrollY: target }),
  setIsScrolling: (isScrolling: boolean) => set({ isScrolling }),
}))