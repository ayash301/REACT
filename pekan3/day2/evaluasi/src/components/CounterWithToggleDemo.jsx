import React from "react";
import { useCounterWithToggle } from "../hooks/useCounterWithToggle";

export default function CounterWithToggleDemo() {
  const { count, increment, decrement, reset, isVisible, toggleVisible } =
    useCounterWithToggle(0);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>#3</h3>
      <button onClick={toggleVisible}>
        {isVisible ? "Sembunyikan Counter" : "Tampilkan Counter"}
      </button>
      {isVisible && (
        <div>
          <h4>Count: {count}</h4>
          <button onClick={increment}>Tambah</button>
          <button onClick={decrement}>Kurang</button>
          <button onClick={reset}>Reset</button>
        </div>
      )}
    </div>
  );
}
