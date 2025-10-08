import React, { useRef } from "react";

function UncontrolledForm() {
  const nameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nama kamu: ${nameRef.current.value}`);
    nameRef.current.value = "";
  };

  return (
    <div className="card">
      <h2>Tugas ke empat</h2>
      <form onSubmit={handleSubmit} className="flex">
        <input type="text" ref={nameRef} placeholder="Masukkan nama..." />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
