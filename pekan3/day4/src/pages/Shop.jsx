import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      let url = "https://dummyjson.com/products";
      if (category) {
        url = `https://dummyjson.com/products/category/${category}`;
      }
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data.products);
      setLoading(false);
    };
    fetchProducts();
  }, [category]);

  if (loading) return <h3 style={{ textAlign: "center" }}>Loading...</h3>;

  return (
    <div style={{ padding: "40px" }}>
      <h2 style={{ textAlign: "center", color: "#0fb5a8" }}>
        {category ? `Produk: ${category}` : "Semua Produk"}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "25px",
          marginTop: "40px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
            style={{
              background: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "15px",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <h4 style={{ color: "#0fb5a8" }}>{item.title}</h4>
            <p style={{ fontWeight: "bold" }}>${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
