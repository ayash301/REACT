import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export default function LocalStorageDemo() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const containerStyle = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "20px",
    textAlign: "center",
    borderRadius: "10px",
  };

  return (
    <div style={containerStyle}>
      <h3>#5</h3>
      <p>Tema {theme}</p>
      <button onClick={toggleTheme}>Ganti Tema</button>
    </div>
  );
}
