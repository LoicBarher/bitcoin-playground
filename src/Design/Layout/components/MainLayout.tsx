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
  };

  const bodyContainerStyle: CSSProperties = {
    backgroundColor: colors.base.background.secondary,
    color: colors.base.text.secondary,
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
  };

  const navContainerStyle: CSSProperties = {
    backgroundColor: colors.base.background.primary,
    width: "19rem",
    flexShrink: 0,
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    color: colors.base.text.secondary,
    fontWeight: 700,
  };

  const mainContentStyle: CSSProperties = {
    flex: "1 1 auto",
    paddingTop: "3rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    paddingBottom: "3rem",
    overflowY: "auto",
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
