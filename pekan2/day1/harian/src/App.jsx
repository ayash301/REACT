import React from "react";
import EventHandlerExample from "./components/EventHandlerExample";
import SyntheticEventExample from "./components/SyntheticEventExample";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import ValidationForm from "./components/ValidationForm";
import "./style.css";

function App() {
  return (
    <div className="container">

      <EventHandlerExample />
      <SyntheticEventExample />
      <ControlledForm />
      <UncontrolledForm />
      <ValidationForm />
    </div>
  );
}

export default App;
