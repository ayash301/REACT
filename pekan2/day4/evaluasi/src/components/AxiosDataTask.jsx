import React, { useState, useEffect } from "react";
import axios from "axios";

function AxiosDataTask() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users/1");
      setUser(response.data);
    };
    getUser();
  }, []);

  if (!user) return <p>Memuat data pengguna...</p>;

  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2> Axios API</h2>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>Telepon: {user.phone}</p>
    </div>
  );
}

export default AxiosDataTask;
