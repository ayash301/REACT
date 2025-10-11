import React, { useState, useEffect } from "react";

function AbortControllerTask() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", { signal });
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        setData(json);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("❗ Fetch dibatalkan");
        } else {
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, []);

  if (loading) return <p> Memuat data (dapat dibatalkan)...</p>;
  if (error) return <p style={{ color: "red" }}> Kesalahan: {error.message}</p>;
  if (!data) return <p> Data tidak ditemukan.</p>;

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2> AbortController Cleanup</h2>
      <h3>{data?.title || "Tidak ada judul"}</h3>
      <p>{data?.body || "Tidak ada isi"}</p>
    </div>
  );
}

export default AbortControllerTask;
