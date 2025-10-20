import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(username, password);
    navigate("/shop"); 
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "40px",
        backgroundColor: "#f9f9f9",
        minHeight: "80vh",
      }}
    >
      <h2 style={{ color: "#0fb5a8" }}>Login ke Black Market 😈</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "30px",
          background: "#fff",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          borderRadius: "10px",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "10px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              width: "250px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            background: "#0fb5a8",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
