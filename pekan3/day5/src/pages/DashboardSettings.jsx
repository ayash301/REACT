import React, { useState } from "react";

function DashboardSettings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notif, setNotif] = useState(true);

  const containerStyle = {
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  const switchStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <h3 style={{ color: "#0fb5a8", textAlign: "center" }}>⚙️ Pengaturan Akun</h3>

      <div style={switchStyle}>
        <span>Mode Gelap</span>
        <input
          type="checkbox"
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />
      </div>

      <div style={switchStyle}>
        <span>Notifikasi Email</span>
        <input
          type="checkbox"
          checked={notif}
          onChange={() => setNotif(!notif)}
        />
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            backgroundColor: "#0fb5a8",
            color: "white",
            border: "none",
            padding: "10px 25px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => alert("Pengaturan disimpan!")}
        >
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
}

export default DashboardSettings;
