import React, { useState } from "react";

function Temperature() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);
    setFahrenheit((c * 9) / 5 + 32);
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);
    setCelsius(((f - 32) * 5) / 9);
  };

  return (
    <div style={{ border: "1px solid black", padding: "10px", width: "320px", margin: "10px auto" }}>
      <h3>Lifting State Up</h3>
      <label>Celsius: </label>
      <input type="number" value={celsius} onChange={handleCelsiusChange} />
      <br />
      <label>Fahrenheit: </label>
      <input type="number" value={fahrenheit} onChange={handleFahrenheitChange} />
    </div>
  );
}

export default Temperature;
