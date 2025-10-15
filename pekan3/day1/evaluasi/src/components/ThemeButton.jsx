import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === "light" ? "#eee" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        padding: 10,
        borderRadius: 6,
        margin: 5,
      }}
    >
      Ganti Tema ({theme})
    </button>
  );
}
