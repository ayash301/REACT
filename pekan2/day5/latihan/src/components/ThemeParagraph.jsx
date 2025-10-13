import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);

  const paragraphStyle = {
    color: theme === "light" ? "#000" : "#fff",
    backgroundColor: theme === "light" ? "#fff" : "#222",
    padding: "10px",
    borderRadius: "5px",
    width: "60%",
    margin: "20px auto",
  };

  return (
    <p style={paragraphStyle}>
      tema <strong>{theme}</strong>.
    </p>
  );
}

export default ThemedParagraph;
