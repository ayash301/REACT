import React from "react";
import Parent from "./Parent";

function PropDrillingExample() {
  const username = "Santri Programmer";

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "320px", margin: "10px auto" }}>
      <h3>Prop Drilling</h3>
      <Parent name={username} />
    </div>
  );
}

export default PropDrillingExample;
