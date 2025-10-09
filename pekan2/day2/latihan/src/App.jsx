import React, { useState } from "react";

function App() {
  const [products, setProducts] = useState(null); // awalnya null

  const handleSetNull = () => setProducts(null);
  const handleSetEmpty = () => setProducts([]);
  const handleSetData = () =>
    setProducts([
      { id: 1, name: "Laptop", price: 1200 },
      { id: 2, name: "Mouse", price: 25 },
      { id: 3, name: "Keyboard", price: 75 },
      { id: 4, name: "Monitor", price: 300 },
    ]);

  let content;

  if (products === null) {
    content = <p>Produk lagi ga ada</p>;
  } else if (products.length === 0) {
    content = <p> produk tidak dapat ditampilkan.</p>;
  } else {
    content = (
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Daftar Produk</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={handleSetNull} style={{ marginRight: "10px" }}>
          Set Null
        </button>
        <button onClick={handleSetEmpty} style={{ marginRight: "10px" }}>
          Set Kosong
        </button>
        <button onClick={handleSetData}>Set Data</button>
      </div>

      {content}
    </div>
  );
}

export default App;
