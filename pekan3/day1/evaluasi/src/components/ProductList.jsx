import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function ProductList() {
  const { addItem } = useContext(CartContext);

  const products = [
    { id: 1, name: "Produk A", price: 50000 },
    { id: 2, name: "Produk B", price: 80000 },
    { id: 3, name: "Produk C", price: 120000 },
  ];

  return (
    <div>
      <h3>Daftar Produk</h3>
      {products.map((p) => (
        <div key={p.id}>
          {p.name} - Rp{p.price.toLocaleString()}{" "}
          <button onClick={() => addItem(p)}>Tambah ke Keranjang</button>
        </div>
      ))}
    </div>
  );
}
