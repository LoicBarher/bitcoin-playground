import { type FC, useState, type CSSProperties } from "react";
import { BitcoinIcon, MoneyIcon, ToolIcon, CompassIcon } from "../../icons";
import { useThemeContext, THEME_COLORS } from "../../Theme";
import { type RouteName, ROUTE_NAME, useRouterContext } from "../../../Routing";
import type { NavItem } from "../types";

export const NavBar: FC = () => {
  const { currentPage, setCurrentPage } = useRouterContext();
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];
  const [hoveredId, setHoveredId] = useState<RouteName | null>(null);

  const navItems: NavItem[] = [
    {
      id: ROUTE_NAME.MondeBleu,
      label: "Le Problème",
      icon: <MoneyIcon />,
      color: colors.accent.blue,
    },
    {
      id: ROUTE_NAME.MondeOrange,
      label: "La Solution",
      icon: <BitcoinIcon />,
      color: colors.accent.orange,
    },
    {
      id: ROUTE_NAME.MondeVert,
      label: "La Pratique",
      icon: <ToolIcon />,
      color: colors.accent.green,
    },
  ];

  const navStyle: CSSProperties = {
    backgroundColor: colors.background.secondary,
    padding: "1.5rem 1rem",
    display: "flex",
    flexDirection: "column",
    borderRight: `1px solid ${colors.border.primary}`,
    width: "16rem",
    height: "100%",
  };

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem",
    marginBottom: "2.5rem",
    color: colors.text.secondary,
  };

  const listStyle: CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.75rem",
  };

  const baseButtonStyle: CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    textAlign: "left",
    transition: "background-color 0.2s, color 0.2s",
    cursor: "pointer",
    border: "none",
    backgroundColor: "transparent",
  };

  return (
    <nav style={navStyle}>
      <div style={headerStyle}>
        <CompassIcon />
        <span style={{ fontWeight: 500 }}>Menu d'exploration</span>
      </div>
      <ul style={listStyle}>
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          const isHovered = hoveredId === item.id;

          const itemStyle: CSSProperties = {
            ...baseButtonStyle,
            color: isActive ? item.color.text : colors.text.primary,
            backgroundColor: isActive
              ? item.color.primary
              : isHovered
              ? colors.background.hover
              : "transparent",
            fontWeight: isActive ? "600" : "normal",
          };

          return (
            <li key={item.id} style={{ width: "100%" }}>
              <button
                onClick={() => setCurrentPage(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={itemStyle}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
