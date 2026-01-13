import { type FC } from "react";
import { getWorldThemeColorName, THEME_COLORS, useThemeContext } from "..";
import { useRouterContext } from "../../Routing";

type Props = {
  size?: string | number;
};

export const BookIcon: FC<Props> = ({ size = "3rem" }) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const fillColor = colors[worldThemeColorName].border.secondary;
  const strokeColor = colors[worldThemeColorName].border.secondary;

  return (
    <svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <g fill={fillColor} stroke={strokeColor} strokeWidth="1">
        <path d="M47.4 42.7 L11.8 43.1 C11.6 43.4 11 43.9 10.7 44 C10.5 44 9.7 43.4 9.2 43.6 C7.1 44.4 6.9 46.9 6.5 48.3 C5.8 50.8 6.4 54.6 7.2 55.8 C8.3 57.1 34 87.5 34.9 88.4 C36.1 89.5 37.1 89.7 39 89.2 C47.4 87 71.9 81.7 87.4 77.4 C88.3 77 88 76.2 87.3 75.5 L83.6 73.3 C83.6 74.3 83.7 75.2 84 76.2 C69.7 79.5 52.5 83.2 37.9 86.5 C36.6 86.1 35.4 84.1 35.2 83 C34.8 80.2 35.3 78.8 35.9 78 C36.4 77.2 36.9 76.7 37.4 76.4 C37.9 76.5 38.8 76.7 39.2 76.5 C39.8 76.3 40.1 75.9 40.5 75.6 L86.8 68.4 C87.6 67.8 87.1 67.1 86.7 66.7 L47.4 42.7 z M47 44.8 L83.3 67 L39.4 73.7 C38.9 74 38.7 74.5 38.5 74.6 C38.3 74.7 37.6 74.5 37 74.5 C35.8 74.8 34.3 77 33.9 78.6 C33 82.1 33.7 84 35.3 86.5 L8.9 54.8 C8.3 53.9 7.9 52.2 8.3 49.6 C8.5 48.3 9 47 9.7 45.9 C10.1 46 10.5 46.3 11.2 46 C12.1 45.7 12.1 45 12.3 45 z M11.8 47.2 C11.3 47.6 20 56 24.4 60.5 C28.7 65 36.8 74.4 37.5 73.9 C38.1 73.4 29.5 64.3 25.2 59.7 C21 55.4 12.3 46.7 11.8 47.2 z" />
      </g>
    </svg>
  );
};
