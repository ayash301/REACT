import React, { useState } from "react";
import InputMessage from "./InputMessage";
import DisplayMessage from "./DisplayMessage";

function SharedStateExample() {
  const [message, setMessage] = useState("");

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "320px", margin: "10px auto" }}>
      <h3>Shared State antar Komponen</h3>
      <InputMessage onChange={setMessage} />
      <DisplayMessage message={message} />
    </div>
  );
}

export default SharedStateExample;
