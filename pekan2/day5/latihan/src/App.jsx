import React from "react";
import Temperature from "./components/Temperature";
import CounterReduce from "./components/CounterReduce";
import { ThemeProvider } from "./components/ThemeContext";
import ThemedButton from "./components/ThemeButton";
import ThemedParagraph from "./components/ThemeParagraph";
function App() {
    return (
    <ThemeProvider>
      <div style={{ textAlign: "center", padding: "20px" }}>

        <ThemedButton />
        <ThemedParagraph />
        <Temperature />
        <CounterReduce />
      </div>
    </ThemeProvider>
  );
}

export default App;
