import React from "react";
import { useTheme } from "./ThemeContext";

function ThemedParagraph() {
  const { theme } = useTheme();

  const style = {
    color: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#fff" : "#333",
    padding: "8px",
    borderRadius: "5px",
  };

  return <p style={style}>Ini paragraf bertema {theme}</p>;
}

export default ThemedParagraph;
