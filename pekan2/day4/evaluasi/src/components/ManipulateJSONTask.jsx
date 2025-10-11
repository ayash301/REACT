import React, { useState, useEffect } from "react";
import axios from "axios";

function ManipulateJSONTask() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const filtered = res.data
          .map(u => ({
            id: u.id,
            name: u.name,
            email: u.email,
            city: u.address.city,
          }))
          .filter(u => u.city === "Gwenborough");

        setUsers(filtered);
      } catch (err) {
        console.error(" Gagal memuat data:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);
  if (loading) return <p> Memuat data pengguna...</p>;
  if (error) return <p style={{ color: "red" }}> Terjadi kesalahan: {error.message}</p>;
  if (users.length === 0) return <p> Tidak ada pengguna ditemukan.</p>;

  return (
    <div style={{
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9",
      maxWidth: "400px",
      margin: "20px auto",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "#333" }}> Manipulasi Data JSON</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {users.map(u => (
          <li key={u.id} style={{
            marginBottom: "10px",
            background: "#fff",
            padding: "10px",
            borderRadius: "8px",
            boxShadow: "0 0 5px rgba(0,0,0,0.1)"
          }}>
            <strong>{u.name}</strong>  
            <br />
            <span style={{ color: "#555" }}>{u.email}</span>  
            <br />
            <em style={{ color: "#888" }}>{u.city}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ManipulateJSONTask;
