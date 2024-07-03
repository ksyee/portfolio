interface PillProps {
  children: React.ReactNode;
}

export function Pill({ children }: PillProps) {
  return (
    <span className="rounded-md bg-gray-200 px-6pxr py-2pxr text-15pxr">
      {children}
    </span>
  );
}
