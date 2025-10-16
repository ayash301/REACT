import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function FetchDemo() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/1"
  );

  if (loading) return <p>Memuat data...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>#2</h3>
      <h4>{data.title}</h4>
      <p>{data.body}</p>
    </div>
  );
}
