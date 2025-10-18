import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function Dashboard() {
  const sidebarStyle = {
    width: "240px",
    background: "#0fb5a8",
    color: "white",
    padding: "30px 20px",
    borderRadius: "16px",
    minHeight: "80vh",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  };

  const linkStyle = {
    display: "block",
    padding: "10px 15px",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    marginBottom: "10px",
    transition: "background 0.3s",
  };

  const activeLinkStyle = {
    background: "rgba(255,255,255,0.2)",
    fontWeight: "600",
  };

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        padding: "40px",
        background: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* Sidebar */}
      <aside style={sidebarStyle}>
        <h2 style={{ marginBottom: "30px", fontWeight: "700" }}>Dashboard</h2>
        <nav>
          <NavLink
            to="profile"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {}),
            })}
          >
            👤 Profil
          </NavLink>
          <NavLink
            to="settings"
            style={({ isActive }) => ({
              ...linkStyle,
              ...(isActive ? activeLinkStyle : {}),
            })}
          >
            ⚙️ Pengaturan
          </NavLink>
        </nav>
      </aside>

      {/* Konten utama */}
      <main
        style={{
          flex: 1,
          background: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

export default Dashboard;
