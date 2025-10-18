import React from "react";

function DashboardProfile() {
  const user = {
    name: "Bjorni",
    email: "1212@gmail.com",
    joined: "Januari 1945",
    location: "Saranjana",
  };

  return (
    <div>
      <h2 style={{ color: "#0fb5a8", marginBottom: "20px" }}>Profil Pengguna</h2>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          backgroundColor: "#f4fdfc",
          padding: "30px",
          borderRadius: "16px",
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNFwj8SKt06MMQrIJhOCHmOgRYdczilVJsEtG5JGlP8HMD_GLxjDK99YklcEoblxrVCM1B3U7m6gXnL_mB7uw25W1_JSvli4zDgHBcPbJzA"
          alt="User Avatar"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "4px solid #0fb5a8",
          }}
        />

        <div style={{ textAlign: "left" }}>
          <h3 style={{ margin: "0 0 10px", color: "#333" }}>{user.name}</h3>
          <p style={{ margin: "5px 0", color: "#666" }}>
            📧 <b>Email:</b> {user.email}
          </p>
          <p style={{ margin: "5px 0", color: "#666" }}>
            📅 <b>Bergabung:</b> {user.joined}
          </p>
          <p style={{ margin: "5px 0", color: "#666" }}>
            📍 <b>Lokasi:</b> {user.location}
          </p>
        </div>
      </div>

      <div
        style={{
          marginTop: "40px",
          background: "white",
          border: "1px solid #eee",
          borderRadius: "16px",
          padding: "25px",
        }}
      >
        <h3 style={{ color: "#0fb5a8" }}>Riwayat Aktivitas</h3>
        <ul style={{ color: "#555", lineHeight: "1.8" }}>
          <li>🛒 Melakukan pembelian produk "Buku 1001 cara korupsi"</li>
          <li>💬 Memberikan ulasan pada "TOko kami"</li>
          <li>📦 Melacak pesanan #A12B4C sedang dikirim</li>
        </ul>
      </div>
    </div>
  );
}

export default DashboardProfile;
