import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export function Badge({ children }: BadgeProps) {
  return (
    <span className="text-nowrap rounded bg-secondary px-[6px] py-[2px] text-[12px] text-white">
      {children}
    </span>
  );
}
