import { type FC, type CSSProperties } from "react";
import { useThemeContext, THEME_COLORS } from "../../Theme";

export const Footer: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const footerStyle: CSSProperties = {
    padding: "1rem 2rem",
    textAlign: "center",
    backgroundColor: colors.background.secondary,
    borderTop: `1px solid ${colors.border.primary}`,
    color: colors.text.secondary,
    fontSize: "0.875rem",
  };

  return (
    <footer style={footerStyle}>
      <p>2025 - Tous droits réservés.</p>
    </footer>
  );
};
