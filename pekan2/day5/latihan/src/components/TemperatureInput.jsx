import React from "react";

function TemperatureInput({ scale, temperature, onTemperatureChange }) {
  const scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <label>
      suhu {scaleNames[scale]}:
        <input
          type="number"
          value={temperature}
          onChange={(e) => onTemperatureChange(e.target.value)}
          style={{
            marginLeft: "10px",
            padding: "6px",
            border: "1px solid #ccc",
            borderRadius: "6px",
            width: "120px",
          }}
        />
      </label>
    </div>
  );
}

export default TemperatureInput;
