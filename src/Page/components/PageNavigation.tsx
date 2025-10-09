import { type FC, type CSSProperties, useState } from "react";
import { useThemeContext, THEME_COLORS } from "../../Design";
import { useRouterContext, useNavigationLogic } from "../../Routing/";
import { type RouteName } from "../../Routing/";

export const PageNavigation: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];
  const { previousPage, nextPage } = useNavigationLogic();
  const { setCurrentPage } = useRouterContext();

  const [hoveredButton, setHoveredButton] = useState<"prev" | "next" | null>(
    null
  );

  const containerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "3rem",
    paddingTop: "1.5rem",
    borderTop: `1px solid ${colors.base.border.primary}`,
  };

  const baseButtonStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    padding: "0.75rem 1.5rem",
    borderRadius: "0.5rem",
    border: `1px solid ${colors.base.border.secondary}`,
    background: "transparent",
    cursor: "pointer",
    textAlign: "left",
    transition: "background-color 0.2s, border-color 0.2s",
  };

  const buttonLabelStyle: CSSProperties = {
    fontSize: "0.875rem",
    color: colors.base.text.secondary,
  };

  const buttonTitleStyle: CSSProperties = {
    fontSize: "1rem",
    fontWeight: "600",
    color: colors.base.text.primary,
  };

  const getButtonStyle = (isHovered: boolean): CSSProperties => ({
    ...baseButtonStyle,
    backgroundColor: isHovered ? colors.base.background.hover : "transparent",
    borderColor: isHovered
      ? colors.base.border.primary
      : colors.base.border.secondary,
  });

  const renderButton = (
    page: { id: RouteName; label: string } | null,
    type: "prev" | "next"
  ) => {
    if (!page) return <div style={{ flex: 1 }} />; // Empty div to maintain layout
    return (
      <button
        style={{
          ...getButtonStyle(hoveredButton === type),
          flex: 1,
          textAlign: type === "prev" ? "left" : "right",
        }}
        onClick={() => setCurrentPage(page.id)}
        onMouseEnter={() => setHoveredButton(type)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <span style={buttonLabelStyle}>
          {type === "prev" ? "Précédent" : "Suivant"}
        </span>
        <span style={buttonTitleStyle}>
          {type === "prev" ? `← ${page.label}` : `${page.label} →`}
        </span>
      </button>
    );
  };
  return (
    <nav style={containerStyle}>
      {renderButton(previousPage, "prev")}
      {renderButton(nextPage, "next")}
    </nav>
  );
};
