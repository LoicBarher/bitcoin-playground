import { type FC, type CSSProperties } from "react";

type ChevronIconProps = {
  isExpanded: boolean;
};

/**
 * An icon that rotates based on its expansion state.
 */
export const ChevronIcon: FC<ChevronIconProps> = ({ isExpanded }) => {
  const style: CSSProperties = {
    transition: "transform 0.2s ease-in-out",
    transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
};
