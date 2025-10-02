import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [messages, setMessages] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>

      <h2>Status User:</h2>
      <p>{isLoggedIn ? "Selamat datang kembali, User!" : "Silakan login terlebih dahulu."}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      <h2>Pesan Anda:</h2>
      <p>
        {messages > 0 ? `Anda punya ${messages} pesan baru.` : "Tidak ada pesan baru."}
      </p>
      <button onClick={() => setMessages(messages + 1)}>Tambah Pesan</button>
      <button onClick={() => setMessages(0)} style={{ marginLeft: "10px" }}>
        Hapus Pesan
      </button>
    </div>
  );
}

export default App;
