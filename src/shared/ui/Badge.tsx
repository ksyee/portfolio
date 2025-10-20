import {ReactNode} from 'react';

interface IBadgeProps {
  children: ReactNode;
}

export function Badge({children}: IBadgeProps) {
  return (
      <span className="text-nowrap rounded bg-secondary px-[6px] py-[2px] text-[12px] text-white">
      {children}
    </span>
  );
}
