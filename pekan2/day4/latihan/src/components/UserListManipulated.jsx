import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserListManipulated() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
       
        const processedUsers = response.data
          .map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            city: user.address.city 
          }))
          .filter(user => user.city === 'South Elvis'); 

        setUsers(processedUsers);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Memuat daftar pengguna...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;
  if (users.length === 0) return <p>Tidak ada pengguna yang ditemukan.</p>;

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
  <h2 style={{ color: "#111827", marginBottom: "16px" }}>
    Daftar Pengguna (Manipulasi Data)
  </h2>

  <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
    {users.map((user) => (
      <li
        key={user.id}
        style={{
          backgroundColor: "#f9fafb",
          marginBottom: "10px",
          padding: "10px",
          borderRadius: "8px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          transition: "background 0.3s",
        }}
      >
        <strong style={{ color: "#2563eb" }}>{user.name}</strong>
        <p style={{ margin: "5px 0", color: "#4b5563", fontSize: "14px" }}>
          {user.email}
        </p>
        <p style={{ margin: 0, color: "#6b7280", fontSize: "13px" }}>
          Kota: {user.city}
        </p>
      </li>
    ))}
  </ul>
</div>

  );
}

export default UserListManipulated;