import { type FC, type ReactNode, type CSSProperties } from "react";
import {
  getWorldThemeColorName,
  THEME_COLORS,
  useThemeContext,
} from "../../Design";
import { hexToRgb } from "../helpers";
import { useRouterContext } from "../../Routing";

type HighlightTextProps = {
  children: ReactNode;
  highLightColorHex?: string;
};

export const HighlightText: FC<HighlightTextProps> = ({
  children,
  highLightColorHex,
}) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);

  const highlightStyle: CSSProperties = {
    borderRadius: "1em 0 1em 0",
    padding: "0.1em 0.4em",
    // color: colors.base.text.secondary,
    // fontWeight: "600",
    // Ensures the highlight doesn't get cut off on line breaks
    boxDecorationBreak: "clone",
    WebkitBoxDecorationBreak: "clone",
  };

  const highlightColor =
    highLightColorHex ||
    (worldThemeColorName == "base"
      ? colors.base.background.tertiary
      : colors[worldThemeColorName].background.secondary);
  const rgbColor = hexToRgb(highlightColor);

  if (rgbColor)
    highlightStyle.backgroundImage = `linear-gradient(
      -100deg,
      rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2),
      rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.2) 95%,
      rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, 0.1)
    )`;

  return <span style={highlightStyle}>{children}</span>;
};
