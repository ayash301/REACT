import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Home() {
  const [name, setName] = useState("");
  const { user, login } = useContext(UserContext);

  const containerStyle = {
    textAlign: "center",
    marginTop: "60px",
  };

  const highlightStyle = {
    color: "#3b3bf4",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #aaa",
    borderRadius: "6px",
    marginRight: "10px",
  };

  const buttonStyle = {
    background: "linear-gradient(90deg, #4a4ff2, #7a5cf4)",
    border: "none",
    color: "white",
    padding: "10px 18px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  const formStyle = {
    marginTop: "20px",
  };

  const handleLogin = () => {
    login(name);
    setName("");
  };

  return (
    
    <div
      style={{
        marginTop: "80px", 
        minHeight: "200vh", 
        width: "100vw", 
        overflowX: "hidden",
      }}
    >
      <div style={containerStyle}>
        <h1>
          HALLO BOSS <span style={highlightStyle}>{user}</span>
        </h1>
        <div style={formStyle}>
          <input
            type="text"
            value={name}
            placeholder="Masukkan nama"
            onChange={(e) => setName(e.target.value)}
            style={inputStyle}
          />
          <button onClick={handleLogin} style={buttonStyle}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
