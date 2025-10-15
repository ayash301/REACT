import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const buttonStyle = {
    background: "white",
    border: "none",
    color: "#333",
    padding: "10px 15px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "500",
    
  };

  return (
    <button style={buttonStyle} onClick={toggleTheme}>
      ganti tema ({theme})
    </button>
  );
}

export default ThemeButton;
