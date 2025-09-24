import { type FC, type CSSProperties } from "react";

const iconStyle: CSSProperties = {
  height: "1.25rem", // 20px
  width: "1.25rem", // 20px
};

/**
 * Icon representing the "Solution" (Bitcoin) world.
 */
export const BitcoinIcon: FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={iconStyle}
  >
    <path d="M4.5 10.2a5.6 5.6 0 1 1 9 0 5.6 5.6 0 1 1-9 0zM12 22.3V1.7M9 19.5v-15m6 15v-15"></path>
  </svg>
);
