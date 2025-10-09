import React, { useState } from "react";

function TernaryExample() {
  const [isLogin, setIsLogin] = useState(false);
  const messages = ["Mandi dulu", "INFO NGOPAG"];

  return (
    <div>
      <h2>Tugas 2</h2>
      <p>{isLogin ? "Berhasil login" : "belum login"}</p>
      {isLogin && messages.length > 0 && (
        <p>Anda punya {messages.length} pesan belum dibaca.</p>
      )}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default TernaryExample;
