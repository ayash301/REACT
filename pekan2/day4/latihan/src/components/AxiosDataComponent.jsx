import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const randomId = Math.floor(Math.random() * 10) + 1; 
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${randomId}`
        );
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Memuat data pengguna...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "40px",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          padding: "20px",
          width: "500px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          fontFamily: "Arial, sans-serif",
          color: "#1f2937",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            marginBottom: "10px",
            fontSize: "22px",
            fontWeight: "700",
            color: "#111827",
          }}
        >
          Data yang dari Axios
        </h2>
        <h3
          style={{
            marginBottom: "8px",
            fontSize: "18px",
            color: "#2563eb",
          }}
        >
          {data.name}
        </h3>
        <p style={{ margin: "6px 0", fontSize: "16px", lineHeight: "1.6" }}>
          <strong>Email:</strong> {data.email}
        </p>
        <p style={{ margin: "6px 0", fontSize: "16px", lineHeight: "1.6" }}>
          <strong>Telepon:</strong> {data.phone}
        </p>
      </div>
    </div>
  );
}

export default App;
