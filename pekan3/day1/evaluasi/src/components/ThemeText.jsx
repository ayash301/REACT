import React, { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

export default function ThemeText() {
  const { theme } = useContext(ThemeContext);
  return (
    <p style={{ color: theme === "light" ? "#111" : "#eee" }}>
      
    </p>
  );
}
