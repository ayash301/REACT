import React from "react";
import { useUserContext } from "../hooks/useUserContext";

export default function UserInfo() {
  const { user, login, logout, updateProfile } = useUserContext();

  return (
    <div style={{ border: "1px solid #aaa", padding: 10, borderRadius: 6, margin: 10 }}>
      <h3>Data Pengguna</h3>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Status: {user.isLoggedIn ? "Login" : "Belum Login"}</p>
      {user.isLoggedIn ? (
        <>
          <button onClick={logout}>Logout</button>
          <button onClick={() => updateProfile({ name: "Nama Baru" })}>
            Update Profil
          </button>
        </>
      ) : (
        <button onClick={() => login("Ayyasy", "anuwayyif")}>Login</button>
      )}
    </div>
  );
}
3