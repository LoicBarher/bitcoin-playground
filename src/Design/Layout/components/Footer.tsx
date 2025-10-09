import { type FC, type CSSProperties } from "react";
import { useThemeContext, THEME_COLORS } from "../../Theme";

export const Footer: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const footerStyle: CSSProperties = {
    padding: "1rem 2rem",
    textAlign: "center",
    backgroundColor: colors.base.background.primary,
    borderTop: `1px solid ${colors.base.border.primary}`,
    color: colors.base.text.secondary,
    fontSize: "0.875rem",
  };

  return (
    <footer style={footerStyle}>
      <p>2025 - Tous droits réservés.</p>
    </footer>
  );
};
