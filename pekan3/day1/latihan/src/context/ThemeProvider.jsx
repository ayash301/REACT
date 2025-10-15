import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const themeStyle = {             
    backgroundColor: theme === "light" ? "#f8f9fa" : "#1e1e1e",
    color: theme === "light" ? "black" : "white",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={themeStyle}>{children}</div>
    </ThemeContext.Provider>
  );
};
