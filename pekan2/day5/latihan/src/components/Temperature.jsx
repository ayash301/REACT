import React, { useState } from "react";
import TemperatureInput from "./TemperatureInput";

function Temperature() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
  const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

  const tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) return "";
    const output = convert(input);
    return Math.round(output * 1000) / 1000;
  };

  const handleCelsiusChange = (temp) => {
    setScale("c");
    setTemperature(temp);
  };

  const handleFahrenheitChange = (temp) => {
    setScale("f");
    setTemperature(temp);
  };

  const celsius =
    scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit =
    scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "400px",
        margin: "40px auto",
        border: "2px solid #eee",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial",
      }}
    >
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange}
      />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange}
      />

      <p style={{ textAlign: "center" }}>
       {parseFloat(celsius) >= 10000000000
        ? "Panas matahari"
        : parseFloat(celsius) >= 100
        ? "Air mendidih"
        : parseFloat(celsius) <= 0
        ? "Air membeku"
        : "Air dalam keadaan cair"}

      </p>
    </div>
  );
}

export default Temperature;
