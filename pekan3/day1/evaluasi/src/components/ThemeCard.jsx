import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemeCard() {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fafafa" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: 15,
        borderRadius: 8,
        marginTop: 10,
      }}
    >
      <h4>Tema {theme}</h4>
     
    </div>
  );
}
