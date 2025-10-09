import React, { useState } from "react";

function SwitchExample() {
  const [status, setStatus] = useState("loading");
  const statuses = ["loading", "success", "error", "unknown"];

  let content;
  switch (status) {
    case "loading":
      content = <p>Memuat data...</p>;
      break;
    case "success":
      content = <p style={{ color: "green" }}>Data berhasil dimuat!</p>;
      break;
    case "error":
      content = <p style={{ color: "red" }}>Terjadi kesalahan.</p>;
      break;
    default:
      content = <p>Status tidak diketahui.</p>;
  }

  const nextStatus = () => {
    const index = (statuses.indexOf(status) + 1) % statuses.length;
    setStatus(statuses[index]);
  };

  return (
    <div>
      <h2>Tugas 3</h2>
      {content}
      <button onClick={nextStatus}>Ubah Status</button>
    </div>
  );
}

export default SwitchExample;
