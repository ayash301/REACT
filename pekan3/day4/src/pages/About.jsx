import React from "react";

function About() {
  const stats = [
    { label: "Pelanggan Aktif", value: "120.5K+" },
    { label: "Produk Terjual", value: "969K+" },
    { label: "Rating Rata-rata", value: "5/5" },
  ];

  return (
    <div style={{ padding: "60px 20px", textAlign: "center", backgroundColor: "#f8f9fa" }}>
      <h1 style={{ color: "#0fb5a8", fontSize: "2.5rem", marginBottom: "10px" }}>
        Tentang Black Market😈
      </h1>
      <p style={{ maxWidth: "700px", margin: "0 auto 40px", color: "#555", lineHeight: "1.7" }}>
        Black Market adalah platform e-commerce modern yang menghadirkan pengalaman belanja cepat, aman,
        dan menegangkan. Kami menyediakan berbagai produk fashion, aksesoris, dan kebutuhan lifestyle
        dari brand ternama di seluruh dunia.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px",
          marginBottom: "50px",
        }}
      >
        {stats.map((s) => (
          <div
            key={s.label}
            style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
              padding: "30px 50px",
              minWidth: "200px",
            }}
          >
            <h2 style={{ color: "#0fb5a8", fontSize: "2rem", margin: "0" }}>{s.value}</h2>
            <p style={{ color: "#555", marginTop: "10px", fontWeight: "500" }}>{s.label}</p>
          </div>
        ))}
      </div>

      <h2 style={{ color: "#0fb5a8", marginBottom: "10px" }}>Visi & Misi Kami</h2>
      <p style={{ maxWidth: "600px", margin: "0 auto", color: "#555" }}>
      Gaboleh pulang sebelum uang anda habis di Black Market!
      </p>
    </div>
  );
}

export default About;
