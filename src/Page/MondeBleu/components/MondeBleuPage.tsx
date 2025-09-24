import { type FC, type CSSProperties } from "react";
import { InflationSimulator } from "./InflationSimulator";
import { THEME_COLORS, useThemeContext } from "../../../Design";

/**
 * La page principale pour le "Monde Bleu".
 * Elle s'adapte maintenant dynamiquement au thème sélectionné.
 */
export const MondeBleuPage: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const pageContainerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
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
  };

  const sectionTitleStyle: CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: colors.text.primary,
    borderBottom: `2px solid ${colors.border.primary}`,
    paddingBottom: "0.5rem",
    marginBottom: "1rem",
  };

  return (
    <div style={pageContainerStyle}>
      <header>
        <h1 style={titleStyle}>Le Problème Fondamental</h1>
        <p style={subtitleStyle}>
          Le coût de la vie augmente, les inégalités se creusent. Et si le
          problème venait de la conception même de notre monnaie ? Ce premier
          monde explore les mécanismes qui érodent silencieusement votre
          épargne.
        </p>
      </header>

      <section>
        <h2 style={sectionTitleStyle}>
          Jouet n°1 : La Course Contre l'Inflation
        </h2>
        <InflationSimulator />
      </section>
    </div>
  );
};
