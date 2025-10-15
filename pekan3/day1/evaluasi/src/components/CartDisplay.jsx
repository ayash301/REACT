import React, { useContext } from "react";
import CartContext from "../contexts/CartContext";

export default function CartDisplay() {
  const { cart, removeItem, clearCart, total } = useContext(CartContext);
  return (
    <div style={{ borderTop: "1px solid #ccc", marginTop: 10, paddingTop: 10 }}>
      <h3>Keranjang Belanja</h3>
      {cart.length === 0 ? (
        <p>Keranjang Kosong</p>
      ) : (
        <>
          {cart.map((item) => (
            <p key={item.id}>
              {item.name} - Rp{item.price.toLocaleString()}{" "}
              <button onClick={() => removeItem(item.id)}>Hapus</button>
            </p>
          ))}
          <p><b>Total: Rp{total.toLocaleString()}</b></p>
          <button onClick={clearCart}>Kosongkan</button>
        </>
      )}
    </div>
  );
}
