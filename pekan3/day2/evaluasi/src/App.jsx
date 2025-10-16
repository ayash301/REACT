import React from "react";
import ToggleDemo from "./components/ToggleDemo";
import FetchDemo from "./components/FetchDemo";
import CounterWithToggleDemo from "./components/CounterWithToggleDemo";
import FormDemo from "./components/FormDemo";
import LocalStorageDemo from "./components/LocalStorageDemo";

function App() {
  return (
    <div>
      <ToggleDemo />
      <FetchDemo />
      <CounterWithToggleDemo />
      <FormDemo />
      <LocalStorageDemo />
    </div>
  );
}

export default App;
