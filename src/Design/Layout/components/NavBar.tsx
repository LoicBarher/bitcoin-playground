import { type FC, type CSSProperties, Fragment, type JSX } from "react";
import { useThemeContext, THEME_COLORS } from "../../../Design";
import { ChevronIcon } from "../../icons";
import {
  NAVIGATION_TREE,
  useRouterContext,
  type NavigationItem,
} from "../../../Routing";
import { useNavBar } from "../hooks";

export const NavBar: FC = () => {
  const { theme } = useThemeContext();
  const colors = THEME_COLORS[theme];
  const { currentPage } = useRouterContext();
  const { openMenus, handleMenuClick, interactionId, setInteractionId } =
    useNavBar();

  const navStyle: CSSProperties = {
    padding: "1.5rem 1rem",
    display: "flex",
    flexDirection: "column",
    borderRight: `1px solid ${colors.base.border.primary}`,
    height: "100%",
  };

  const headerStyle: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem",
    marginBottom: "2.5rem",
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: 500,
    color: colors.base.text.primary,
    letterSpacing: "0.075rem",
    flexShrink: 0,
  };

  const listContainerStyle: CSSProperties = {
    overflowY: "auto",
    flex: "1 1 auto",
  };

  const listStyle: CSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  };

  const renderNavItem = (item: NavigationItem, level = 0): JSX.Element => {
    const isDirectlyActive = currentPage === item.id;
    const isExpanded = openMenus.has(item.label);
    const isInteracting = interactionId === (item.id || item.label);

    const buttonStyle: CSSProperties = {
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: "0.6rem",
      paddingBottom: "0.6rem",
      paddingLeft: `${0.5 + level * 0.5}rem`,
      paddingRight: 0,
      textAlign: "left",
      fontSize: "0.875rem",
      letterSpacing: "0.05rem",
      cursor: "pointer",
      border: "none",
      transition: "background-color 0.2s, color 0.2s, font-size 0.2s",
      backgroundColor:
        !isDirectlyActive && isInteracting
          ? colors.base.background.hover
          : "transparent",
      color: isDirectlyActive
        ? colors.base.text.primary
        : colors.base.text.secondary,
      outline: "none",
    };

    const underlineStyle: CSSProperties = {
      position: "absolute",
      bottom: 0,
      left: "50%",
      transform: "translateX(-50%)",
      height: "1px",
      backgroundColor: colors.base.border.tertiary,
      width: isDirectlyActive ? "50%" : "0%",
      transition: "width 0.3s ease-in-out",
    };

    const submenuStyle: CSSProperties = {
      listStyle: "none",
      padding: 0,
      marginLeft: "0.5rem",
      borderLeft: `1px solid ${colors.base.border.primary}`,
      overflow: "hidden",
      maxHeight: isExpanded ? "500px" : "0",
      visibility: isExpanded ? "visible" : "hidden",
      transition: `max-height 0.3s ease-in-out, visibility 0s linear ${
        isExpanded ? "0s" : "0.3s"
      }`,
    };

    const buttonContent = (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          paddingRight: "1.5rem",
        }}
      >
        {item.icon && level === 0 && item.icon}
        <span>{item.label}</span>
      </div>
    );

    return (
      <Fragment key={item.id || item.label}>
        <button
          style={buttonStyle}
          onClick={() => handleMenuClick(item)}
          onMouseEnter={() => setInteractionId(item.id || item.label)}
          onMouseLeave={() => setInteractionId(null)}
          onFocus={() => setInteractionId(item.id || item.label)}
          onBlur={() => setInteractionId(null)}
        >
          {buttonContent}
          {item.children && (
            <div style={{ width: "1rem", height: "1rem" }}>
              <ChevronIcon isExpanded={isExpanded} />
            </div>
          )}
          <span style={underlineStyle}></span>
        </button>
        {item.children && (
          <ul style={submenuStyle}>
            {item.children.map((subItem) => (
              <li key={subItem.id || subItem.label}>
                {renderNavItem(subItem, level + 1)}
              </li>
            ))}
          </ul>
        )}
      </Fragment>
    );
  };

  return (
    <nav style={navStyle}>
      <div style={headerStyle}>
        <span>Menu d'exploration</span>
      </div>
      <div style={listContainerStyle}>
        <ul style={listStyle}>
          {NAVIGATION_TREE.map((mainItem) => (
            <li key={mainItem.label}>{renderNavItem(mainItem)}</li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
