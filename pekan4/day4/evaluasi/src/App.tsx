import React from "react";
import "./app.css";

import UseRefDemo from "./components/UseRefDemo";
import PortalModalDemo from "./components/PortalModal";
import WithLoggerDemo from "./components/withLogger";
import MouseTrackerDemo from "./components/MouseTracker";

const App = () => {
  return (
    <div className="container">
      <h1 className="title">Evaluasi BAB 4.4: Advanced Hooks dan Patterns</h1>

      <section className="card">
        <h2>1. useRef DOM Access</h2>
        <UseRefDemo />
      </section>

      <section className="card">
        <h2>2. React Portal Modal</h2>
        <PortalModalDemo />
      </section>

      <section className="card">
        <h2>3. Higher Order Component (HOC)</h2>
        <WithLoggerDemo />
      </section>

      <section className="card">
        <h2>4. Render Props Pattern</h2>
        <MouseTrackerDemo />
      </section>
    </div>
  );
};

export default App;
