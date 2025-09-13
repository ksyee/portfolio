interface DetailListTitleProps {
  children: React.ReactNode;
}

export function DetailListTitle({ children }: DetailListTitleProps) {
  return (
    <h4 className="bg-gray-100 px-8pxr py-6pxr text-16pxr font-semibold">
      {children}
    </h4>
  );
}
