import { type FC, type CSSProperties } from "react";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../../Design";
import type { BalanceSheetLine } from "../types";
import { useRouterContext } from "../../../Routing";

type Props = {
  title: string;
  assets: BalanceSheetLine[];
  liabilities: BalanceSheetLine[];
};

export const BalanceSheet: FC<Props> = ({ title, assets, liabilities }) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const rowCount = Math.max(assets.length, liabilities.length);
  const rows = Array.from({ length: rowCount });

  const containerStyle: CSSProperties = {
    width: "100%",
    border: "none",
    overflow: "hidden",
  };

  const titleStyle: CSSProperties = {
    padding: "0.75rem 1rem",
    fontWeight: "600",
    letterSpacing: 1.75,
    textAlign: "center",
    color: colors.base.text.primary,
  };

  const tableStyle: CSSProperties = {
    borderCollapse: "collapse",
    maxWidth: "50rem",
    margin: "0 auto",
    textAlign: "center",
  };

  const tableHeaderStyle: CSSProperties = {
    padding: "0.75rem 1rem",
    fontWeight: "bold",
    backgroundColor: colors[worldThemeColorName].background.primary,
    border: `1px solid ${colors[worldThemeColorName].border.secondary}`,
  };

  const cellStyle: CSSProperties = {
    padding: "0.75rem 1rem",
    border: `1px solid ${colors[worldThemeColorName].border.secondary}`,
    width: "50%",
    whiteSpace: "pre-line",
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ACTIF</th>
            <th style={tableHeaderStyle}>PASSIF</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((_, index) => {
            const asset = assets[index];
            const liability = liabilities[index];
            const isRowNew = asset?.hasChanged || liability?.hasChanged;
            const rowStyle: CSSProperties = {
              color: isRowNew ? "#fbbf24" : colors.base.text.primary,
            };
            const assetContent = asset ? (
              <>
                <strong>{asset.amount}</strong>
                <br />
                {asset.description}
              </>
            ) : null;

            const liabilityContent = liability ? (
              <>
                <strong>{liability.amount}</strong>
                <br />
                {liability.description}
              </>
            ) : null;
            return (
              <tr key={index} style={rowStyle}>
                <td style={cellStyle}>{assetContent}</td>
                <td style={cellStyle}>{liabilityContent}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
