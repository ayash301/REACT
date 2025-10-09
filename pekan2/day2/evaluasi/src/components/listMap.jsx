import React, { useState } from "react";

function ProductList() {
  const [products, setProducts] = useState(null);

  const handleNull = () => setProducts(null);
  const handleEmpty = () => setProducts([]);
  const handleData = () =>
    setProducts([
      { id: 1, name: "MP 40", price: 2000 },
      { id: 2, name: "FAMAS F1", price: 1230 },
      { id: 3, name: "Glock 17", price: 750 },
      { id: 4, name: "AK-74M ", price: 380 },
    ]);

  let content;
  if (products === null) {
    content = <p>Produk belum datang</p>;
  } else if (products.length === 0) {
    content = <p>Produk tidak ada</p>;
  } else {
    content = (
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ${p.price}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <h2>Tugas 4&5</h2>
      <div style={{ marginBottom: "10px" }}>
        <button onClick={handleNull} style={{ marginRight: "5px" }}>
          Set Null
        </button>
        <button onClick={handleEmpty} style={{ marginRight: "5px" }}>
          Set Kosong
        </button>
        <button onClick={handleData}>List firegun</button>
      </div>
      {content}
    </div>
  );
}

export default ProductList;
