import React, { useState } from "react";
import IfElseExample from "./components/renderingIfElse"
import TernaryExample from "./components/ternary";
import SwitchExample from "./components/switch";
import ProductList from "./components/listMap";

function App() {
  const [example, setExample] = useState("ifelse");

  let activeExample;
  if (example === "ifelse") activeExample = <IfElseExample />;
  else if (example === "ternary") activeExample = <TernaryExample />;
  else if (example === "switch") activeExample = <SwitchExample />;
  else activeExample = <ProductList />;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setExample("ifelse")} style={{ marginRight: "10px" }}>
          if/else
        </button>
        <button onClick={() => setExample("ternary")} style={{ marginRight: "10px" }}>
          Ternary & &&
        </button>
        <button onClick={() => setExample("switch")} style={{ marginRight: "10px" }}>
          Switch
        </button>
        <button onClick={() => setExample("list")}>List Rendering</button>
      </div>

      <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        {activeExample}
      </div>
    </div>
  );
}

export default App;
