import React from 'react'

interface IPillProps {
  children: React.ReactNode;
}

export function Pill({ children }: IPillProps) {
  return (
    <span className="rounded-md bg-gray-200 px-[6px] py-[2px] text-[15px]">
      {children}
    </span>
  );
}
