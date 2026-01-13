import { type FC, type ReactNode, type CSSProperties } from "react";
import { useThemeContext, THEME_COLORS, getWorldThemeColorName } from "../../Design";
import { useRouterContext } from "../../Routing";

type Props = {
  icon?: ReactNode;
  title: string;
  children: ReactNode;
};

export const Callout: FC<Props> = ({ icon, title, children }) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);

  const containerStyle: CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: "1.5rem",
    position: "relative",
    margin: "2rem 0",
    backgroundColor: colors.base.background.primary,
    paddingTop: "1rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    borderLeft: `8px solid ${colors[worldThemeColorName].border.secondary}`,
    borderRadius: "0.5rem",
    boxShadow: colors.boxShadow.soft,
  };

  const iconContainerStyle: CSSProperties = {
    color: colors[worldThemeColorName].border.secondary,
    flexShrink: 0,
  };

  const contentContainerStyle: CSSProperties = {
    flex: "1 1 auto",
  };

  const titleStyle: CSSProperties = {
    display: "block",
    color: colors[worldThemeColorName].text.primary,
    fontStyle: "normal",
    fontWeight: 700,
    marginBottom: "2rem",
  };

  const textStyle: CSSProperties = {
    color: colors[worldThemeColorName].text.secondary,
    fontStyle: "normal",
    lineHeight: 1.6,
  };

  return (
    <aside style={containerStyle}>
      <div style={iconContainerStyle}>{icon}</div>
      <div style={contentContainerStyle}>
        <span style={titleStyle}>{title}</span>
        <div style={textStyle}>{children}</div>
      </div>
    </aside>
  );
};
