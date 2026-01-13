import { type FC, type CSSProperties } from "react";
import { useQESimulator } from "../hooks/useQESimulator";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../../Design";
import { useRouterContext } from "../../../Routing";

export const QESimulator: FC = () => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const { isQEDone, startQE, reset } = useQESimulator();

  const controlsStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
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
    backgroundColor: colors.base.background.secondary,
    color: colors.base.text.primary,
  };

  const disabledStyle: CSSProperties = {
    opacity: 0.5,
    cursor: "not-allowed",
  };

  const ticketContainerStyle: CSSProperties = {
    position: "relative",
    backgroundColor: `${theme === "dark" ? "#172554" : "#fde68a"}`,
    border: `1px dashed ${theme === "dark" ? "#d97706" : "#451a03"}`,
    borderRadius: "0.5rem",
    padding: "1.5rem",
    marginBottom: "1rem",
    textAlign: "center",
  };

  const labelStyle: CSSProperties = {
    color: colors.base.text.secondary,
    fontSize: "0.875rem",
    marginBottom: "0.25rem",
  };

  const valueStyle: CSSProperties = {
    color: `${theme === "dark" ? "#f59e0b" : "#451a03"}`,
    fontSize: "2rem",
    fontWeight: "bold",
    margin: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.5rem",
  };

  const cutoutStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: "1rem",
    height: "3rem",
    backgroundColor: `${theme === "dark" ? "#d97706" : "#451a03"}`,
    borderRadius: "50%",
  };

  return (
    <div style={{ marginTop: "2rem", marginBottom: "4rem" }}>
      <div style={controlsStyle}>
        <button
          style={{ ...baseButtonStyle, ...(isQEDone ? disabledStyle : {}) }}
          onClick={startQE}
          disabled={isQEDone}
        >
          Acheter massivement des obligations
        </button>
        <button
          style={{ ...baseButtonStyle, ...(!isQEDone ? disabledStyle : {}) }}
          onClick={reset}
          disabled={!isQEDone}
        >
          Réessayer
        </button>
      </div>
      <div style={ticketContainerStyle}>
        <div style={{ ...cutoutStyle, left: "-0.5rem" }}></div>
        <div style={{ ...cutoutStyle, right: "-0.5rem" }}></div>
        <h4
          style={{
            margin: 0,
            color: colors.base.text.primary,
            fontSize: "1.25rem",
          }}
        >
          Coupon d'obligation d'État
        </h4>
        <div
          style={{
            fontSize: "0.9rem",
            color: colors.base.text.primary,
            marginBottom: "1.5rem",
            marginTop: "0.25rem",
          }}
        >
          Le coupon (paiement annuel) de l'obligation est fixé à 40€ (4% de 1
          000 €)
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            gap: "1rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <div style={labelStyle}>Prix de l'obligation</div>
            {!isQEDone ? (
              <div style={valueStyle}>1 000 €</div>
            ) : (
              <div style={valueStyle}>↗ 4 000 €</div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <div style={labelStyle}>Rendement (Taux d'intérêt)</div>
            {!isQEDone ? (
              <div style={valueStyle}>4%</div>
            ) : (
              <div style={valueStyle}>↘ 1%</div>
            )}
          </div>
        </div>
      </div>
      {isQEDone && (
        <p style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
          La Banque Centrale a inondé le marché pour acheter ces titres. En
          faisant s'envoler le prix de l'obligation à 4 000 €, son rendement
          annuel (fixé à 40 €) s'écrase mécaniquement à 1%. C'est ainsi que le{" "}
          <strong>
            Quantitative Easing écrase artificiellement les taux sur toute
            l'économie.
          </strong>
        </p>
      )}
    </div>
  );
};
