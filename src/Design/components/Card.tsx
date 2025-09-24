import { type FC, type ReactNode, type CSSProperties } from "react";
import { useThemeContext, THEME_COLORS } from "../Theme/";

type Props = {
  children: ReactNode;
};

/**
 * Une carte réutilisable.
 * Elle s'adapte maintenant dynamiquement au thème sélectionné.
 */
export const Card: FC<Props> = ({ children }) => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];

  const cardStyle: CSSProperties = {
    backgroundColor: colors.background.secondary,
    padding: "1.5rem",
    borderRadius: "0.75rem",
    border: `1px solid ${colors.border.primary}`,
  };

  return <div style={cardStyle}>{children}</div>;
};
