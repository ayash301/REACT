function App() {
  const a = 20;
  const b = 5;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2>Hasil Penjumlahan dari {a} + {b}</h2>
      <p>= {a + b}</p>

      <h2>Hasil Pengurangan dari {a} - {b}</h2>
      <p>= {a - b}</p>

      <h2>Hasil Perkalian dari {a} × {b}</h2>
      <p>= {a * b}</p>

      <h2>Hasil Pembagian dari {a} ÷ {b}</h2>
      <p>= {a / b}</p>
    </div>
  );
}

export default App;
