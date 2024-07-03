import { create } from 'zustand';

interface PreloadImageStore {
  peerReviewImageSrc: string;
  setPeerReviewImage: (src: string) => void;
}

export const usePreloadImageStore = create<PreloadImageStore>((set) => ({
  peerReviewImageSrc: '',
  setPeerReviewImage: (src: string) => set({ peerReviewImageSrc: src }),
}))