import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Pesan dari ${form.name} berhasil dikirim!`);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ color: "#0fb5a8", fontSize: "2.5rem", marginBottom: "10px" }}>Hubungi Kami</h1>
      <p style={{ color: "#666", maxWidth: "600px", margin: "0 auto 40px" }}>
        Kalo ada komplain langsung aja hubungi kami ya!!
      </p>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Nama</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "20px",
          }}
        />

        <label style={{ display: "block", marginBottom: "8px", fontWeight: "600" }}>Pesan</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            height: "120px",
            marginBottom: "20px",
          }}
        />

        <button
          type="submit"
          style={{
            backgroundColor: "#0fb5a8",
            color: "white",
            padding: "12px 30px",
            border: "none",
            borderRadius: "8px",
            fontWeight: "600",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Kirim Pesan 
        </button>
      </form>
    </div>
  );
}

export default Contact;
