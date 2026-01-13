import { type FC, type CSSProperties } from "react";
import { useCompensationSimulator } from "../hooks";
import { BalanceSheet } from "./BalanceSheet";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../../Design";
import { useRouterContext } from "../../../Routing";

export const CompensationSimulator: FC = () => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const {
    isCompensationMade,
    doCompensation,
    reset,
    userBankCompensationData,
  } = useCompensationSimulator();

  const controlsStyle: CSSProperties = {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  };

  const baseButtonStyle: CSSProperties = {
    padding: "0.75rem 1.5rem",
    fontWeight: 600,
    borderRadius: "0.5rem",
    border: `1px solid ${colors[worldThemeColorName].border.secondary}`,
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

  const clearButtonStyle: CSSProperties = {
    ...baseButtonStyle,
    backgroundColor: colors.base.background.secondary,
    color: colors.base.text.primary,
  };

  const resetButtonStyle: CSSProperties = {
    ...baseButtonStyle,
    backgroundColor: colors.base.background.secondary,
    color: colors.base.text.primary,
  };

  const disabledStyle: CSSProperties = {
    opacity: 0.5,
    cursor: "not-allowed",
  };

  const sectionStyle: CSSProperties = {
    paddingTop: "2rem",
    fontSize: "1rem",
    letterSpacing: "0.05rem",
    lineHeight: 1.625,
  };

  return (
    <div style={{ marginTop: "2rem" }}>
      <div style={controlsStyle}>
        <button
          style={{
            ...clearButtonStyle,
            ...(isCompensationMade ? disabledStyle : {}),
          }}
          onClick={doCompensation}
          disabled={isCompensationMade}
        >
          Démarrer la compensation
        </button>
        <button
          style={{
            ...resetButtonStyle,
            ...(!isCompensationMade ? disabledStyle : {}),
          }}
          onClick={reset}
          disabled={!isCompensationMade}
        >
          Réessayer
        </button>
      </div>
      <BalanceSheet
        title="BILAN COMPTABLE DE LA BANQUE DE M. QUIPAYE"
        assets={userBankCompensationData.assets}
        liabilities={userBankCompensationData.liabilities}
      />
      {isCompensationMade && (
        <>
          <p style={sectionStyle}>
            <strong>
              Et voilà ! 🏦 La compensation est effectuée. Observez bien les
              changements en jaune. 🧐
            </strong>
            <br />
            - Au passif : la banque de Nicolas a épongé sa dette.
            <br />- À l'actif : les "Réserves M0" de la banque ont diminué de
            200 000 €.
          </p>
          <p style={sectionStyle}>
            La banque a bel et bien utilisé sa monnaie de Banque Centrale (M0)
            pour régler une dette née d'une transaction en monnaie commerciale
            (M2). Vous comprenez maintenant parfaitement la différence entre ces
            deux niveaux de monnaie ! <br />
          </p>
          <p style={sectionStyle}>
            Nous venons encore de voir une notion fondamentale de l'économie
            moderne, et essentielle pour aborder la suite.
          </p>
        </>
      )}
    </div>
  );
};
