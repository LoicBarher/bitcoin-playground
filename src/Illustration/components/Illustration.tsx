import { type FC, type ReactNode, type CSSProperties } from "react";
import {
  getWorldThemeColorName,
  THEME_COLORS,
  useThemeContext,
} from "../../Design/Theme";
import { useRouterContext } from "../../Routing";
import { useIllustration } from "../hooks/useIllustration";

type IllustrationProps = {
  src?: string;
  children?: ReactNode;
  alt?: string;
  width?: string;
  caption?: string;
};

export const Illustration: FC<IllustrationProps> = ({
  src,
  children,
  alt,
  width = "100%",
  caption,
}) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const { isHovered, containerHandlers } = useIllustration();

  const containerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: "2rem auto",
    width: width,
    minWidth: "min(100%, 17.5rem)",
  };

  const frameStyle: CSSProperties = {
    width: "100%",
    height: "auto",
    borderRadius: "0.75rem",
    border: `1px solid ${colors[worldThemeColorName].border.primary}`,
    boxShadow: isHovered ? colors.boxShadow.strong : colors.boxShadow.soft,
    backgroundColor: colors.base.background.secondary,
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "box-shadow 0.3s ease",
    cursor: "pointer",
  };

  const contentTransitionStyle: CSSProperties = {
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover",
    filter:
      theme === "dark"
        ? isHovered
          ? "brightness(1)"
          : "brightness(0.9)"
        : isHovered
        ? "brightness(0.95)"
        : "none",
  };

  const captionStyle: CSSProperties = {
    marginTop: "0.75rem",
    fontSize: "0.85rem",
    color: colors.base.text.secondary,
    fontStyle: "italic",
    textAlign: "center",
    maxWidth: "80%",
  };

  return (
    <figure style={containerStyle}>
      <div
        style={frameStyle}
        {...containerHandlers}
      >
        {src ? (
          <img
            src={src}
            alt={alt || "Illustration"}
            style={contentTransitionStyle}
          />
        ) : (
          <div
            style={{
              ...contentTransitionStyle,
              display: "flex",
              justifyContent: "center",
              padding: "1rem",
            }}
          >
            {children}
          </div>
        )}
      </div>

      {caption && <figcaption style={captionStyle}>{caption}</figcaption>}
    </figure>
  );
};
