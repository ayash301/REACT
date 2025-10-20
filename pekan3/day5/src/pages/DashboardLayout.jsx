import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function DashboardLayout({ onLogout }) {
  return (
    <div className="dashboard-layout">
      <h2>Dashboard Admin</h2>

      <nav className="dashboard-nav">
        <NavLink to="profile" className="dash-link">
          Profile
        </NavLink>
        <NavLink to="settings" className="dash-link">
          Settings
        </NavLink>
        <button
          onClick={onLogout}
          style={{
            marginLeft: "10px",
            background: "#ff4d4d",
            border: "none",
            color: "#fff",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </nav>

      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;
