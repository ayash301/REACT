import React, { useState, useEffect } from "react";

function LoadingErrorTask() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/10000"); 
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p> Memuat data...</p>;
  if (error) return <p style={{ color: "red" }}> Terjadi kesalahan: {error.message}</p>;

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2> Loading & Error Handling</h2>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
    </div>
  );
}

export default LoadingErrorTask;
