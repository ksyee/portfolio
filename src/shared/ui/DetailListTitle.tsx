import React from "react";

interface IDetailListTitleProps {
  children: React.ReactNode;
}

export function DetailListTitle({ children }: IDetailListTitleProps) {
  return (
    <h4 className="bg-gray-100 px-[8px] py-[6px] text-[16px] font-semibold">
      {children}
    </h4>
  );
}
