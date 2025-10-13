import React, { useState } from "react";

function CounterReduce() {
  const [actions, setActions] = useState([]);

  const handleTambah = () => {
    setActions([...actions, 1]);
  };

  const handleKurang = () => {
    setActions([...actions, -1]);
  };

  const handleClear = () => {
    setActions([]);
  };

  const total = actions.reduce((acc, curr) => acc + curr, 0);

  return (
     <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "40px auto",
        border: "2px solid #eee",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >

      <h1>{total}</h1>
      <div>
        <button onClick={handleKurang}>Kurang</button>
        <button onClick={handleTambah} style={{ marginLeft: "10px" }}>
          Tambah
        </button>
        <button onClick={handleClear} style={{ marginLeft: "10px" }}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default CounterReduce;
