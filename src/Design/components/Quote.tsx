import { type FC, type ReactNode, type CSSProperties } from "react";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
} from "../../Design";
import { useRouterContext } from "../../Routing";

type Props = {
  children: ReactNode;
  author: string;
};

export const Quote: FC<Props> = ({ children, author }) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);

  const blockquoteStyle: CSSProperties = {
    position: "relative",
    margin: "2rem 0",
    backgroundColor: colors[worldThemeColorName].background.primary,
    color: colors[worldThemeColorName].text.secondary,
    fontSize: "1rem",
    fontStyle: "italic",
    padding: "1.2rem 2rem 1.2rem 5rem",
    borderLeft: `8px solid ${colors[worldThemeColorName].border.secondary}`,
    lineHeight: 1.6,
    borderRadius: "0.5rem",
    letterSpacing: "0.05rem",
    textAlign: "justify",
    boxShadow: colors.boxShadow.soft,
  };

  const openingQuoteMarkStyle: CSSProperties = {
    color: colors[worldThemeColorName].border.secondary,
    fontSize: "4rem",
    position: "absolute",
    left: "1rem",
    top: "-0.5rem",
  };

  const closingQuoteMarkStyle: CSSProperties = {
    ...openingQuoteMarkStyle,
    position: "absolute",
    left: "auto",
    top: "auto",
    right: "1rem",
    bottom: "0",
    transform: "rotate(180deg)",
  };

  const authorStyle: CSSProperties = {
    display: "block",
    color: colors[worldThemeColorName].text.secondary,
    fontStyle: "normal",
    fontWeight: 700,
  };

  const contentContainerStyle: CSSProperties = {
    position: "relative",
    paddingBottom: "1.5rem",
  };

  return (
    <blockquote style={blockquoteStyle}>
      <span style={openingQuoteMarkStyle}>“</span>
      <div style={contentContainerStyle}>
        {children}
        <span style={closingQuoteMarkStyle}>“</span>
      </div>
      <span style={authorStyle}>{author}</span>
    </blockquote>
  );
};
