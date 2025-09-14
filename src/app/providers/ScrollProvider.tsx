import React, { createContext, useContext } from 'react';
import { useScrollStore } from '@/app/stores/scrollStore';

interface ScrollContextType {
  scrollY: number;
  targetScrollY: number;
  isScrolling: boolean;
  scrollToTop: () => void;
  scrollToTarget: (target: number) => void;
  setScrollY: (y: number) => void;
  setTargetScrollY: (target: number) => void;
  setIsScrolling: (isScrolling: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useScroll must be used within ScrollProvider');
  }
  return context;
};

interface ScrollProviderProps {
  children: React.ReactNode;
}

export const ScrollProvider: React.FC<ScrollProviderProps> = ({ children }) => {
  const { 
    scrollY, 
    targetScrollY, 
    isScrolling, 
    scrollToTop, 
    scrollToTarget, 
    setScrollY, 
    setTargetScrollY, 
    setIsScrolling 
  } = useScrollStore();

  const value: ScrollContextType = {
    scrollY,
    targetScrollY,
    isScrolling,
    scrollToTop,
    scrollToTarget,
    setScrollY,
    setTargetScrollY,
    setIsScrolling
  };

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
};