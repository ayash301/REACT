import React from "react";

function SyntheticEventExample() {
  const handleLinkClick = (e) => {
    e.preventDefault();
    alert("Berhasi;");
  };

  const handleInputChange = (e) => {
    console.log("Input berubah:", e.target.value);
  };

  return (
    <div className="card">
      <h2>Tugas kedua</h2>
      <a href="https://google.com" onClick={handleLinkClick}>
        Klik Link Ini (Navigasi Dicegah)
      </a>
      <br />
      <br />
      <input type="text" onChange={handleInputChange} placeholder="Ketik sesuatu..." />
    </div>
  );
}

export default SyntheticEventExample;
