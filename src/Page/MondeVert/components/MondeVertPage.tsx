import { type FC, type CSSProperties } from "react";
import { THEME_COLORS, useThemeContext } from "../../../Design";

/**
 * La page principale pour le "Monde Vert".
 * Elle s'adapte maintenant dynamiquement au thème sélectionné.
 */
export const MondeVertPage: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const pageContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    color: colors.text.primary,
  };

  const titleStyle: CSSProperties = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: colors.text.primary,
  };

  const subtitleStyle: CSSProperties = {
    fontSize: "1.25rem",
    color: colors.text.secondary,
    maxWidth: "800px",
  };

  const placeholderStyle: CSSProperties = {
    border: `2px dashed ${colors.border.secondary}`,
    borderRadius: "0.75rem",
    padding: "4rem",
    textAlign: "center",
    color: colors.text.secondary,
    marginTop: "2rem",
  };

  return (
    <div style={pageContainerStyle}>
      <header>
        <h1 style={titleStyle}>La Pratique : Les Outils</h1>
        <p style={subtitleStyle}>
          Comprendre c'est bien, agir c'est mieux. Ce monde vous donnera les
          outils interactifs pour mettre en pratique vos connaissances, de
          manière sécurisée et éclairée.
        </p>
      </header>
      <div style={placeholderStyle}>
        <p style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>🛠️</p>
        <p>
          Les outils interactifs pour ce monde sont en cours de construction.
        </p>
      </div>
    </div>
  );
};
