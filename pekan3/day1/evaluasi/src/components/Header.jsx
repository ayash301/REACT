import React, { useContext } from "react";
import LanguageContext from "../contexts/LanguageContext";
import NotificationContext from "../contexts/NotificationContext";

export default function Header() {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { count, clearNotifications } = useContext(NotificationContext);

  return (
    <div
      style={{
        backgroundColor: "#007bff",
        color: "white",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
      }}
    >
      <h2>Header Aplikasi</h2>
      <p>Bahasa: {language}</p>
      <p>Notifikasi: {count}</p>
      <button onClick={toggleLanguage}>Ganti Bahasa</button>
      <button onClick={clearNotifications}>Hapus Notifikasi</button>
    </div>
  );
}
