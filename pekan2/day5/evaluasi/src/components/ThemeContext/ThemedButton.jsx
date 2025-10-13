import React from "react";
import { useTheme } from "./ThemeContext";

function ThemedButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Ganti Tema ({theme})
    </button>
  );
}

export default ThemedButton;
