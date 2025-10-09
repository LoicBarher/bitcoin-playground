import { type FC, type ReactNode, type CSSProperties } from "react";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../Theme/";
import { useRouterContext } from "../../Routing";

type Props = {
  children: ReactNode;
};

export const Card: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];
  const { currentPage } = useRouterContext();
  const worldThemeColorName = getWorldThemeColorName(currentPage);

  const cardStyle: CSSProperties = {
    backgroundColor: colors[worldThemeColorName].background.primary,
    display: "flex",
    boxShadow: colors.boxShadow.strong,
    marginTop: "2rem",
  };

  const contentColumnStyle: CSSProperties = {
    flex: 1,
    padding: "1.5rem",
    fontStyle: "italic",
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    lineHeight: 2,
    textAlign: "justify",
  };

  const leftColumnStyle: CSSProperties = {
    width: "2rem",
    borderRight: `1px solid ${colors[worldThemeColorName].border.secondary}`,
  };

  return (
    <div style={cardStyle}>
      <div style={leftColumnStyle} />
      <div style={contentColumnStyle}>{children}</div>
    </div>
  );
};
