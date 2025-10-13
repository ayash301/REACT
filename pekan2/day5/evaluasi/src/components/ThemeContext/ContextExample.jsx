import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ThemedButton from "./ThemedButton";
import ThemedParagraph from "./ThemedParagraph";

function ContextExample() {
  return (
    <ThemeProvider>
      <div style={{ border: "1px solid black", padding: "10px", width: "320px", margin: "10px auto" }}>
        <h3>Context API (Tema)</h3>
        <ThemedButton />
        <ThemedParagraph />
      </div>
    </ThemeProvider>
  );
}

export default ContextExample;
