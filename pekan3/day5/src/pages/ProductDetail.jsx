import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <h3>Loading...</h3>;

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2 style={{ color: "#0fb5a8" }}>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        style={{ width: "350px", borderRadius: "16px", margin: "20px 0" }}
      />
      <p style={{ maxWidth: "600px", margin: "auto" }}>{product.description}</p>
      <h3 style={{ color: "#0fb5a8" }}>${product.price}</h3>
    </div>
  );
}

export default ProductDetail;
