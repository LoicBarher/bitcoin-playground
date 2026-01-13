import { type FC, type CSSProperties } from "react";
import { useCreditCreation } from "../hooks/useCreditCreation";
import { BalanceSheet } from "./BalanceSheet";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../../Design";
import { useRouterContext } from "../../../Routing";

export const CreditCreationSimulator: FC = () => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const { isLoanGranted, grantLoan, reset, userBankData } = useCreditCreation();

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

  const grantButtonStyle: CSSProperties = {
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
            ...grantButtonStyle,
            ...(isLoanGranted ? disabledStyle : {}),
          }}
          onClick={grantLoan}
          disabled={isLoanGranted}
        >
          J'accorde le prêt !
        </button>
        <button
          style={{
            ...resetButtonStyle,
            ...(!isLoanGranted ? disabledStyle : {}),
          }}
          onClick={reset}
          disabled={!isLoanGranted}
        >
          Réessayer
        </button>
      </div>
      <BalanceSheet
        title="BILAN COMPTABLE DE LA BANQUE DE M. QUIPAYE"
        assets={userBankData.assets}
        liabilities={userBankData.liabilities}
      />
      {isLoanGranted && (
        <>
          <p style={sectionStyle}>
            <strong>
              ALAKAZAM ! 💥 Regardez attentivement la ligne en jaune. 🧐
            </strong>
            <br />
            Par un simple jeu d'écritures, en un seul clic, vous avez en tant
            que banquier créé une ligne magique : une créance de 200 000 € (un
            actif car M. Nicolas QuiPaye vous doit cet argent) et un dépôt de
            200 000 € dans le compte de banque de M. Nicolas QuiPaye (un passif
            pour vous, car vous avez envoyé cet argent sur son compte). 200 000
            € ont littéralement été ajouté dans l'économie. <br />
          </p>
          <p style={sectionStyle}>
            Nous venons de voir un des principes les plus importants de l'économie
            moderne : l'essentiel de la monnaie provient du crédit.
          </p>
        </>
      )}
    </div>
  );
};
