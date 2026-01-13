import { type FC, type ReactNode, type CSSProperties } from "react";
import {
  getWorldThemeColorName,
  THEME_COLORS,
  useThemeContext,
} from "../Theme";
import { useRouterContext } from "../../Routing";
import { hexToRgb } from "../helpers";

type KeywordHighlightProps = {
  children: ReactNode;
};

export const KeywordHighlight: FC<KeywordHighlightProps> = ({ children }) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);

  const containerStyle: CSSProperties = {
    position: "relative",
    display: "inline-block",
    paddingRight:"0.5rem",
  };

  const highlightBackgroundStyle: CSSProperties = {
    position: "absolute",
    display: "block",
    height: "90%",
    width: "105%",
    left: "-10%",
    transform: "rotate(2deg)",
    borderRadius: "20% 25% 20% 24%",
    border: `1px solid ${colors[worldThemeColorName].border.secondary}`,
    zIndex: 0,
  };

  const highlightColor =
    worldThemeColorName == "base"
      ? colors.base.background.tertiary
      : colors[worldThemeColorName].background.secondary;
  const rgbColor = hexToRgb(highlightColor);

  if (rgbColor) {
    highlightBackgroundStyle.backgroundImage = `linear-gradient(
      -100deg,
      rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2),
      rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2) 95%,
      rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.1)
    )`;
  }

  const textStyle: CSSProperties = {
    position: "relative",
    zIndex: 1,
  };

  return (
    <span style={containerStyle}>
      <span style={highlightBackgroundStyle}></span>
      <span style={textStyle}>{children}</span>
    </span>
  );
};
