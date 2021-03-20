import { useState, useContext, createContext } from "react";

import { darkTheme, lightTheme } from "../styles/themes";
import { ThemeProvider as BaseThemeProvider } from "styled-components";

// == theme context
export const ThemeContext = createContext(null);

// == themeProvider
export const ThemeProvider = ({ children }) => {
  const localSt = localStorage.getItem("currentTheme");

  const themeValue = localSt || "dark";

  const [themeString, setThemeString] = useState(themeValue);
  const themeObject = themeString === "dark" ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ themeString, setThemeString }}>
      <BaseThemeProvider theme={themeObject}>{children}</BaseThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);

  const { themeString, setThemeString } = context;

  const toggleTheme = (value) => {
    setThemeString(value);
    localStorage.setItem("currentTheme", value);
  };

  return {
    currentTheme: themeString,
    toggleTheme,
  };
};
