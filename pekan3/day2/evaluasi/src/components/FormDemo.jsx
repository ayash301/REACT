import React from "react";
import { useForm } from "../hooks/useForm";

export default function FormDemo() {
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
  });

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h3>#4</h3>
      <form>
        <input
          name="name"
          placeholder="Nama"
          value={values.name}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
      <p>Nama: {values.name}</p>
      <p>Email: {values.email}</p>
    </div>
  );
}
