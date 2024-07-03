import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="text-nowrap rounded bg-secondary px-6pxr py-2pxr text-12pxr text-white">
      {children}
    </span>
  );
}
