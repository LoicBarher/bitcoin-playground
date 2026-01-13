import { type FC, type CSSProperties } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Line,
} from "recharts";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../../Design";
import { useYieldCurve } from "../hooks/useYieldCurve";
import { useRouterContext } from "../../../Routing";

export const YieldCurveSimulator: FC = () => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const { longRate, setLongRate, chartData, fixedShortRate } = useYieldCurve();
  const marginColor =
    longRate > 1.5
      ? `${colors.semantic.success.background}`
      : `${colors.semantic.error.background}`;
  const longLineColor = colors[worldThemeColorName].border.secondary;
  const shortLineColor = colors[worldThemeColorName].border.primary;

  const containerStyle: CSSProperties = {
    marginTop: "2rem",
    paddingTop: "0.5rem",
    paddingLeft: "0.5rem",
    paddingRight: "0.5rem",
    paddingBottom: "0.5rem",
    borderRadius: "0.5rem",
    border: `1px dashed ${colors[worldThemeColorName].border.primary}`,
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    width: "100%",
    boxShadow: colors.boxShadow.strong,
  };

  const titleStyle: CSSProperties = {
    fontSize: "1.25rem",
    letterSpacing: "0.05rem",
    lineHeight: 1,
    color: colors.base.text.primary,
    textAlign: "center",
  };

  const controlsContainerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
    gap: "1rem",
  };

  const controlBoxStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  };

  const labelStyle: CSSProperties = {
    fontSize: "0.875rem",
    fontWeight: 500,
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>
        Simulation de la rentabilité des banques commerciales en fonction du
        taux à long terme
      </p>
      <div style={{ height: "20rem", width: "100%" }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorMargin" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={marginColor} stopOpacity={0.6} />
                <stop offset="95%" stopColor={marginColor} stopOpacity={0.3} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              stroke={colors.base.border.secondary}
              vertical={false}
            />

            <XAxis
              dataKey="term"
              stroke={colors.base.text.primary}
              fontSize={12}
              tickLine={false}
              axisLine={true}
              label={{
                value: "Années",
                position: "bottom",
                offset: 0,
                fill: colors.base.text.primary,
                fontSize: 12,
              }}
            />

            <YAxis
              domain={[0, 5]}
              stroke={colors.base.text.primary}
              fontSize={12}
              tickLine={false}
              axisLine={true}
              unit="%"
            />

            <Tooltip
              contentStyle={{
                backgroundColor: colors.base.background.secondary,
                borderColor: colors.base.border.primary,
                borderRadius: "0.5rem",
              }}
              itemStyle={{ color: colors.base.text.primary }}
              labelFormatter={(value) => `Terme : ${value} ans`}
              formatter={(value, name) => [
                `${(value as number).toFixed(2)}%`,
                name,
              ]}
            />

            <Area
              type="monotone"
              dataKey="longRate"
              stroke={longLineColor}
              strokeWidth={2}
              fill="url(#colorMargin)"
              name="Taux Long"
              baseValue={fixedShortRate}
            />

            {/* Ligne Taux Court */}
            <Line
              type="monotone"
              dataKey="shortRate"
              stroke={shortLineColor}
              strokeWidth={2}
              dot={false}
              name="Taux Court"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div style={controlsContainerStyle}>
        <div style={controlBoxStyle}>
          <label
            style={{
              ...labelStyle,
              color: colors[worldThemeColorName].text.primary,
            }}
          >
            Taux à court terme : <strong>{fixedShortRate}%</strong>
          </label>
        </div>
        <div style={controlBoxStyle}>
          <label
            style={{
              ...labelStyle,
              color: colors[worldThemeColorName].border.secondary,
            }}
          >
            Taux à long terme : <strong>{longRate}%</strong>
          </label>
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <input
              type="range"
              min="1"
              max="4"
              step="0.1"
              value={longRate}
              onChange={(e) => setLongRate(parseFloat(e.target.value))}
              style={{
                width: "100%",
                cursor: "pointer",
                accentColor: colors[worldThemeColorName].border.secondary,
              }}
            />
          </div>
        </div>
      </div>
      <span
        style={{
          paddingLeft: "0.5rem",
          paddingRight: "0.5rem",
          color: colors.semantic.info.text,
          marginBottom: "0.5rem",
          textAlign: "center",
          fontSize: "1rem",
          letterSpacing: "0.05rem",
          lineHeight: 1.625,
        }}
      >
        <u>Evaluation</u> :{" "}
        {longRate > 1.5
          ? "Le moteur tourne ! La marge est suffisante pour couvrir les risques. La banque prête à l'économie réelle avec le sourire. 😄"
          : "Alerte moteur ! La marge est trop faible pour couvrir les risques. La banque doit changer de stratégie d'urgence... 😨"}
      </span>
    </div>
  );
};
