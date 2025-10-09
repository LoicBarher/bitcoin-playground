import { type FC, type CSSProperties } from "react";
import { useThemeContext, THEME_COLORS } from "../../../Design";
import { PageNavigation } from "../../components";

const pageStyle: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
};

const titleStyle: CSSProperties = {
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginBottom: "1rem",
};

const paragraphStyle: CSSProperties = {
  fontSize: "1.125rem",
  lineHeight: "1.75",
  maxWidth: "800px", // Limite la largeur pour une meilleure lisibilité
};

const highlightStyle: CSSProperties = {
  padding: "1rem",
  borderRadius: "0.5rem",
  margin: "1rem 0",
};

/**
 * Leçon 1.1.1: D'où Vient la Monnaie ?
 */
export const MondeBleu111Page: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const dynamicTitleStyle: CSSProperties = {
    ...titleStyle,
    color: colors.base.text.primary,
  };

  const dynamicParagraphStyle: CSSProperties = {
    ...paragraphStyle,
    color: colors.base.text.secondary,
  };

  const dynamicHighlightStyle: CSSProperties = {
    ...highlightStyle,
    backgroundColor: colors.base.background.secondary,
    border: `1px solid ${colors.base.border.primary}`,
  };

  return (
    <div style={pageStyle}>
      <header>
        <h1 style={dynamicTitleStyle}>
          D'où Vient la Monnaie ? La Magie du Crédit Bancaire
        </h1>
      </header>

      <section>
        <p style={dynamicParagraphStyle}>
          Contrairement à l'idée reçue, l'argent que nous utilisons n'est pas
          simplement imprimé par l'État. En réalité, plus de 95 % de la monnaie
          en circulation est créée par les banques commerciales (BNP, Société
          Générale, etc.) lorsqu'elles accordent un prêt.
        </p>

        <p style={dynamicParagraphStyle}>
          C'est le principe des <strong>"crédits qui font les dépôts"</strong> :
        </p>

        <div style={dynamicHighlightStyle}>
          <p style={dynamicParagraphStyle}>
            Quand vous empruntez 200 000 € pour un bien immobilier, la banque ne
            prend pas cet argent dans les coffres ou sur le compte d'un autre
            client. Par une simple écriture comptable, elle{" "}
            <strong>crée cette somme</strong> et la crédite sur votre compte.
            Cette nouvelle monnaie (qui est une dette pour vous) circule ensuite
            dans l'économie lorsque vous payez le vendeur.
          </p>
        </div>

        <p style={dynamicParagraphStyle}>
          💡 La grande majorité de l'euro ou du dollar n'est donc qu'une
          promesse de dette inscrite dans les registres des banques.
        </p>
      </section>

      <PageNavigation />
    </div>
  );
};
