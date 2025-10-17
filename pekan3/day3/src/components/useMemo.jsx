import React, { useState, useMemo } from "react";

export default function UseMemo() {
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState("light");

  const expensiveCalculation = (num) => {
    console.log("Melakukan perhitungan berat...");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  };

  const doubled = useMemo(() => expensiveCalculation(number), [number]);

  const style = {
    backgroundColor: theme === "light" ? "#fff" : "#333",
    color: theme === "light" ? "#000" : "#fff",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <div className="card" style={style}>
      <h3>useMemo Example</h3>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <p>Hasil perhitungan: {doubled}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Ganti Tema
      </button>
    </div>
  );
}
