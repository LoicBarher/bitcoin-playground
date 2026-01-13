import { type FC, type ReactNode, type CSSProperties } from "react";
import {
  useThemeContext,
  THEME_COLORS,
  getWorldThemeColorName,
  useIdentityCard,
} from "../..";
import { useRouterContext } from "../../../Routing";

type Props = {
  profilePicture: ReactNode;
  name: string;
  profile: string;
  project: string;
  guarantees: string;
};

export const IdentityCard: FC<Props> = ({
  profilePicture,
  name,
  profile,
  project,
  guarantees,
}) => {
  const { theme } = useThemeContext();
  const { currentPage } = useRouterContext();
  const colors = THEME_COLORS[theme];
  const worldThemeColorName = getWorldThemeColorName(currentPage);
  const accentColor = colors[worldThemeColorName].border.secondary;
  const { isHovered, setIsHovered } = useIdentityCard();

  const containerStyle: CSSProperties = {
    position: "relative",
    marginTop: "6rem",
    marginBottom: "2rem",
    backgroundColor: colors.base.background.secondary,
    borderRadius: "1rem",
    boxShadow: isHovered ? colors.boxShadow.strong : colors.boxShadow.soft,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderTop: `4px solid ${accentColor}`,
    fontSize: "1rem",
    transform: isHovered ? "scale(1.03)" : "scale(1)",
    transition: "transform 0.3s ease, box-shadow 0.1s ease",
    cursor: "pointer",
  };

  const avatarContainerStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "33%",
    aspectRatio: "1 / 1",
    borderRadius: "50%",
    backgroundColor: colors.base.background.secondary,
    border: `2px solid ${colors[worldThemeColorName].border.primary}`,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  const contentStyle: CSSProperties = {
    padding: "calc(15% + 2rem) 1.5rem 2rem 1.5rem",
    width: "100%",
    fontSize: "1rem",
    textAlign: "center",
  };

  const nameStyle: CSSProperties = {
    fontSize: "1.25rem",
    fontWeight: 700,
    letterSpacing: "0.05rem",
    lineHeight: 1.625,
    margin: 0,
    color: colors.base.text.primary,
  };

  const profileStyle: CSSProperties = {
    margin: "0.25rem 0 1.5rem 0",
    fontSize: "0.9rem",
    letterSpacing: "0.1em",
    color: accentColor,
    textTransform: "uppercase",
  };

  const sectionLabelStyle: CSSProperties = {
    color: colors.base.text.primary,
    fontWeight: 700,
    marginBottom: "0.25rem",
    marginTop: "1rem",
  };

  const sectionValueStyle: CSSProperties = {
    color: colors.base.text.secondary,
  };

  return (
    <div
      style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={avatarContainerStyle}>{profilePicture}</div>
      <div style={contentStyle}>
        <div style={nameStyle}>{name}</div>
        <div style={profileStyle}>{profile}</div>
        <div
          style={{
            width: "50%",
            height: "0.0625rem",
            backgroundColor: colors.base.border.primary,
            margin: "0 auto 1.5rem auto",
          }}
        />
        <div style={sectionLabelStyle}>Son projet :</div>
        <span style={sectionValueStyle}>{project}</span>
        <div style={sectionLabelStyle}>Ses garanties auprès de la banque :</div>
        <div style={sectionValueStyle}>{guarantees}</div>
      </div>
    </div>
  );
};
