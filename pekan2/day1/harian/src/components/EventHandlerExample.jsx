import React, { useState } from "react";

function EventHandlerExample() {
  const [message, setMessage] = useState("");

  const handleClick = () => setMessage(" Tombol diklik!");
  const handleMouseEnter = () => setMessage("🖱️ Mouse di atas tombol!");
  const handleMouseLeave = () => setMessage("");

  return (
    <div className="card">
      <h2>Tugas kesatu</h2>
      <button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        Klik atau Arahkan ke Saya
      </button>
      <p>{message}</p>
    </div>
  );
}

export default EventHandlerExample;
