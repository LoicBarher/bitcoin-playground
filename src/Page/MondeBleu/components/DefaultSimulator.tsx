import { type FC, type CSSProperties } from "react";
import { useDefaultSimulator } from "../hooks/useDefaultSimulator";
import { BalanceSheet } from "./BalanceSheet";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../../Design";
import { useRouterContext } from "../../../Routing";

export const DefaultSimulator: FC = () => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const { isDefaulted, triggerDefault, reset, bankData } =
    useDefaultSimulator();

  const controlsStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
    marginBottom: "2rem",
  };

  const baseButtonStyle: CSSProperties = {
    padding: "0.75rem 1.5rem",
    fontWeight: 600,
    borderRadius: "0.5rem",
    border: `1px solid ${colors[worldThemeColorName].border.secondary}`,
    cursor: "pointer",
    transition: "background-color 0.2s",
    backgroundColor: colors.base.background.secondary,
    color: colors.base.text.primary,
  };

  const disabledStyle: CSSProperties = {
    opacity: 0.5,
    cursor: "not-allowed",
  };

  return (
    <>
      <BalanceSheet
        title="ILLUSTRATION DES POINTS 1 ET 2 SUR LE BILAN COMPTABLE DE LA BANQUE"
        assets={bankData.assets}
        liabilities={bankData.liabilities}
      />
      <div style={controlsStyle}>
        <button
          style={{ ...baseButtonStyle, ...(isDefaulted ? disabledStyle : {}) }}
          onClick={triggerDefault}
          disabled={isDefaulted}
        >
          Simuler un défaut de paiement d'une valeur totale de 15 000 000 €
        </button>
        <button
          style={{ ...baseButtonStyle, ...(!isDefaulted ? disabledStyle : {}) }}
          onClick={reset}
          disabled={!isDefaulted}
        >
          Réessayer
        </button>
      </div>
    </>
  );
};
