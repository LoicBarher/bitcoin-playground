import type { FC, ReactNode } from "react";
import { useState, useMemo, useEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import type { Theme } from "../types";
import { THEME_COLORS } from "../data";

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

  useEffect(() => {
    const colors = THEME_COLORS[theme];
    document.body.style.backgroundColor = colors.base.background.primary;
  }, [theme]); // Cet effet se déclenche à chaque changement de thème


  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
