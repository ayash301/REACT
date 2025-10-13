import React from "react";

function InputMessage({ onChange }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Ketik pesan..."
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default InputMessage;
