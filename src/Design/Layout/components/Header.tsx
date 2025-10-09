import { type FC, type CSSProperties } from "react";
import { useRouterContext, ROUTE_NAME } from "../../../Routing";
import { ThemeToggle, useThemeContext, THEME_COLORS } from "../../Theme";
import { BitcoinIcon } from "../../icons";

export const Header: FC = () => {
  const { setCurrentPage } = useRouterContext();
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const headerStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: colors.base.background.primary,
    borderBottom: `1px solid ${colors.base.border.primary}`,
    height: "4rem",
    width: "100%",
  };

  const logoContainerStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    cursor: "pointer",
    background: "none",
    border: "none",
    color: colors.base.text.primary,
    fontSize: "1.25rem",
    fontWeight: "bold",
  };

  return (
    <header style={headerStyle}>
      <button
        style={logoContainerStyle}
        onClick={() => setCurrentPage(ROUTE_NAME.HomePage)}
        aria-label="Retour à la page d'accueil"
      >
        <BitcoinIcon />
        <span>Bitcoin.Decoded</span>
      </button>
      <ThemeToggle />
    </header>
  );
};
