import { type FC, type ReactNode, type CSSProperties } from "react";
import { NavBar } from "./NavBar";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useThemeContext, THEME_COLORS } from "../../Theme";

export const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const rootStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: colors.background.primary,
    color: colors.text.primary,
  };

  const bodyContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto", // Propriété clé : fait en sorte que cette boîte prenne toute la hauteur disponible
  };

  const navContainerStyle: CSSProperties = {
    width: "16rem",
    flexShrink: 0, // Empêche la NavBar de rétrécir
  };

  const mainContentStyle: CSSProperties = {
    flex: "1 1 auto",
    paddingTop: "3rem",
    paddingBottom: "3rem",
    paddingLeft: "7rem",
    paddingRight: "7rem",
    overflowY: 'auto',
  };

  return (
    <div style={rootStyle}>
      <Header />
      <div style={bodyContainerStyle}>
        <div style={navContainerStyle}>
          <NavBar />
        </div>
        <main style={mainContentStyle}>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
