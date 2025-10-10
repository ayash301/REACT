
import React, { useState, useEffect } from 'react';

function UserFetcher({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      setLoading(true);
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]); 

  if (loading) return <p>Memuat data...</p>;
  if (!user) return <p>Tidak ada data pengguna.</p>;

  return (
    <div>
      <h2>Data Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default function App() {
  const [id, setId] = useState(1);
  return (
    <div>
      <h1>Tugaas 2</h1>
      <UserFetcher userId={id} />
      <button onClick={() => setId(prev => prev + 1)}>User Berikutnya</button>
    </div>
  );
}
