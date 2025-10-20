import { useEffect, useState } from 'react';

interface ILoadingScreenProps {
  onLoadComplete?: () => void;
}

export function LoadingScreen({ onLoadComplete }: ILoadingScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        onLoadComplete?.();
      }, 500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onLoadComplete]);

  if (!isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[10000] transition-opacity duration-500 opacity-0 pointer-events-none" />
    );
  }

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-[10000] transition-opacity duration-500">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-20 h-20 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mb-5 mx-auto" />
        
        {/* Loading text */}
        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
}