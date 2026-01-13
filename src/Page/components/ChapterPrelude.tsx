import { type FC, type ReactNode, type CSSProperties } from "react";
import {
  useThemeContext,
  LightbulbIcon,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../Design";
import { useRouterContext } from "../../Routing";

type ChapterPreludeProps = {
  children: ReactNode;
};

/**
 * Un panneau d'information affiché en prélude de chaque page de leçon,
 * résumant l'idée principale.
 */
export const ChapterPrelude: FC<ChapterPreludeProps> = ({ children }) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);

  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
    padding: "1.5rem",
    borderRadius: "0.5rem",
    border: `1px dotted ${colors[worldThemeColorName].border.secondary}`,
    marginTop: "1rem",
    marginBottom: "4rem",
  };

  const iconContainerStyle: CSSProperties = {
    color: colors[worldThemeColorName].border.secondary,
    flexShrink: 0,
  };

  const textStyle: CSSProperties = {
    margin: 0,
    color: colors[worldThemeColorName].text.primary,
    fontStyle: "italic",
    lineHeight: 1.6,
  };

  return (
    <div style={containerStyle}>
      <div style={iconContainerStyle}>
        <LightbulbIcon style={{ width: "1.5rem", height: "1.5rem" }} />
      </div>
      <p style={textStyle}>{children}</p>
    </div>
  );
};
