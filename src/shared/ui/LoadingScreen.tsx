import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  const [visible, setVisible] = useState(isLoading);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
      return;
    }

    const timer = window.setTimeout(() => setVisible(false), 400);
    return () => window.clearTimeout(timer);
  }, [isLoading]);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-slate-900 transition-opacity duration-500 ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-live="polite"
      role="status"
    >
      <div className="text-center">
        <div className="mx-auto mb-5 h-20 w-20 animate-spin rounded-full border-4 border-cyan-400 border-t-transparent" />
        <div className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text">
          Loading Portfolio...
        </div>
      </div>
    </div>
  );
}
