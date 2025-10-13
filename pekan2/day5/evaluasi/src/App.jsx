// 📁 src/App.jsx
import React from "react";
import Temperature from "./components/LiftingStateUp/Temperature";
import PropDrillingExample from "./components/PropDrilling/PropDrillingExample";
import SharedStateExample from "./components/SharedState/SharedStateExample";
import CounterWithReducer from "./components/CounterReducer/CounterWithReducer";
import ContextExample from "./components/ThemeContext/ContextExample";
import "./styles/global.css";

function App() {
  return (
    <div className="app-container">
     
      <section className="card">
        <h2>1. Lifting State Up</h2>
        <Temperature />
      </section>

      <section className="card">
        <h2>2. Prop Drilling</h2>
        <PropDrillingExample />
      </section>

      <section className="card">
        <h2>3. Shared State antar Komponen</h2>
        <SharedStateExample />
      </section>

      <section className="card">
        <h2>4. Counter dengan useReducer</h2>
        <CounterWithReducer />
      </section>

      <section className="card">
        <h2>5. Context API (Tema Light/Dark)</h2>
        <ContextExample />
      </section>
    </div>
  );
}

export default App;
