import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const categories = [
    { name: "smartphones", label: "Smartphones", icon: "📱" },
    { name: "laptops", label: "Laptops", icon: "💻" },
    { name: "womens-dresses", label: "Dress", icon: "👗" },
    { name: "mens-shoes", label: "Sepatu Pria", icon: "👟" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <section
        style={{
          background: "linear-gradient(135deg,#0fb5a8,#72d5ca)",
          padding: "100px 20px",
          color: "white",
          borderRadius: "20px",
          marginBottom: "60px",
        }}
      >
        <h1 style={{ fontSize: "3rem", fontWeight: "700" }}>
          Selamat Datang di Black Market 😈
        </h1>
        <p style={{ fontSize: "1.2rem" }}>
         Habis nendang pintu pasti langsung belanja disini yak??
        </p>
        <button
          onClick={() => navigate("/shop")}
          style={{
            marginTop: "20px",
            background: "white",
            color: "#0fb5a8",
            border: "none",
            borderRadius: "30px",
            padding: "15px 35px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Belanja Sekarang →
        </button>
      </section>

      <h2 style={{ color: "#0fb5a8" }}>Kategori Populer</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(`/shop?category=${cat.name}`)}
            style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              width: "150px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <span style={{ fontSize: "35px" }}>{cat.icon}</span>
            <h4 style={{ marginTop: "10px", color: "#0fb5a8" }}>
              {cat.label}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
