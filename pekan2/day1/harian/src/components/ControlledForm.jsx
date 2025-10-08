import React, { useState } from "react";

function ControlledForm() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Halo, ${name}!`);
    setName("");
  };

  return (
    <div className="card">
      <h2>Tugas ketiga</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ControlledForm;
