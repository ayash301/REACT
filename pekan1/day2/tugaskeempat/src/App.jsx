function App() {
  
  const buwah = [
    { id: 1, name: "Apel", jumlah:'12'  },
    { id: 2, name: "Jeruk", jumlah:"32" },
    { id: 3, name: "Mangga", jumlah:"22" },
    { id: 4, name: "Pisang",jumlah: "21" },
    { id: 5, name: "Semangka", jumlah:"sold"},
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>daftar Buwah</h1>
      <ul>
        {buwah.map((buwah) => (
          <li key={buwah.id}>{buwah.name} - {buwah.jumlah}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
  