import React, { useState, useEffect } from 'react';

function AbortFetchComponent() {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController(); 
    const signal = abortController.signal; 

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', { signal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch dibatalkan');
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
      console.log('Permintaan dibatalkan saat cleanup.');
    };
  }, []);
  if (loading)
    return (
      <p style={{ textAlign: "center", fontSize: "18px", color: "#555" }}>
        Memuat data (dengan pembatalan)...
      </p>
    );

  if (error)
    return (
      <p style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>
        Terjadi kesalahan: {error.message}
      </p>
    );

  return (
    <div
      style={{
        backgroundColor: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
        width: "500px",
        margin: "40px auto",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
        color: "#1f2937",
        textAlign: "center",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <h2 style={{ color: "#111827", marginBottom: "12px" }}>
        Data dari Fetch API (dengan AbortController)
      </h2>

      {data ? (
        <>
          <h3 style={{ color: "#2563eb", fontSize: "20px" }}>{data.title}</h3>
          <p style={{ fontSize: "16px", lineHeight: "1.5", marginTop: "10px" }}>{data.body}</p>
        </>
      ) : (
        <p>Tidak ada data.</p>
      )}
    </div>
  );
}

export default AbortFetchComponent;
