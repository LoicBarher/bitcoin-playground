import { type FC, type CSSProperties } from "react";
import { useThemeContext, useThemeToggle } from "../hooks";
import { THEME_COLORS } from "../data";

export const ThemeToggle: FC = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { isHovered, setIsHovered } = useThemeToggle();
  const colors = THEME_COLORS[theme];

  // Le style de base est maintenant défini à l'intérieur du composant
  // pour accéder aux couleurs dynamiques du thème.
  const baseButtonStyle: CSSProperties = {
    backgroundColor: colors.background.secondary, // Utilise la couleur de fond du thème
    border: `1px solid ${colors.border.primary}`, // Utilise la couleur de bordure du thème
    borderRadius: "9999px",
    padding: "0.5rem",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.2s",
    fontSize: "1rem", // Agrandit légèrement l'icône pour une meilleure visibilité
  };

  const hoverStyle: CSSProperties = {
    backgroundColor: colors.background.hover,
  };

  const finalStyle = {
    ...baseButtonStyle,
    ...(isHovered ? hoverStyle : {}),
  };

  return (
    <button
      style={finalStyle}
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};
