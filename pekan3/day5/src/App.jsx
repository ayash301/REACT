import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import DashboardLayout from "./pages/DashboardLayout"; // GANTI dari Dashboard ke DashboardLayout
import DashboardProfile from "./pages/DashboardProfile";
import DashboardSettings from "./pages/DashboardSettings";
import Login from "./pages/Login";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "sahroni" && password === "1234") {
      setIsLoggedIn(true);
      alert("Login berhasil!");
    } else {
      alert("Username atau password salah!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    alert("Anda telah logout!");
  };

  return (
    <Router>
      <div className="app-container">
        {/* Navbar */}
        <nav className="navbar">
          <h2 className="logo">Black Market 😈</h2>
          <ul>
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>

          {/* Tombol Login / Logout */}
          <div style={{ marginLeft: "auto" }}>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                style={{
                  background: "#ff4d4d",
                  border: "none",
                  color: "#fff",
                  padding: "8px 15px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login">
                <button
                  style={{
                    background: "#0fb5a8",
                    border: "none",
                    color: "#fff",
                    padding: "8px 15px",
                    borderRadius: "8px",
                    cursor: "pointer",
                  }}
                >
                  Login
                </button>
              </NavLink>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* Halaman yang perlu login */}
          <Route
            path="/shop"
            element={isLoggedIn ? <Shop /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/product/:id"
            element={
              isLoggedIn ? <ProductDetail /> : <Navigate to="/login" replace />
            }
          />

          {/* Dashboard Layout */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                <DashboardLayout onLogout={handleLogout} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          >
            <Route index element={<h3>Pilih menu Dashboard</h3>} />
            <Route path="profile" element={<DashboardProfile />} />
            <Route path="settings" element={<DashboardSettings />} />
          </Route>

          {/* Login Page */}
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          {/* Not Found */}
          <Route path="*" element={<h2>Halaman tidak ditemukan 😅</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
