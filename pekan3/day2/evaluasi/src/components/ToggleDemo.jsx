import React from "react";
import { useToggle } from "../hooks/useToggle";

export default function ToggleDemo() {
  const [isVisible, toggleVisible] = useToggle(false);

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>#1</h3>
      <button onClick={toggleVisible}>
        {isVisible ? "Sembunyikan Pesan" : "Tampilkan Pesan"}
      </button>
      {isVisible && <p>hai gurl</p>}
    </div>
  );
}
