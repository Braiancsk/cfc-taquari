import React from "react";
import { HeaderLinkProps } from "./HeaderLinkProps.types";

export const HeaderLink = ({ text, link,active,linkColor, borderColorClass = 'border-gray-200/20' }: HeaderLinkProps) => {
  return (
    <a
      href={link}
      className={`flex-1 border-r-0 border-l-0 border-b-0 border-t-4 border-4 transition hover:border-secondary ${active ? 'border-secondary' : borderColorClass} py-[13px]`}
    >
      <span style={{color:linkColor}} className="font-semibold">{text}</span>
    </a>
  );
};
