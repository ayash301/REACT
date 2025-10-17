import React, { Suspense } from "react";
import "./styles.css";
import ReactMemo from "./components/ReactMemo";
import UseMemo from "./components/useMemo";
import UseCallback from "./components/useCallback";
import LazyHome from "./components/LazyLoading/LazyHome";
import ProfilerDemo from "./components/ProfilerDemo";

export default function App() {
  return (
    <div className="container">

      <section>
        <h2>1. React.memo</h2>
        <ReactMemo />
      </section>

      <section>
        <h2>2. useMemo</h2>
        <UseMemo />
      </section>

      <section>
        <h2>3. useCallback</h2>
        <UseCallback />
      </section>

      <section>
        <h2>4. Lazy Loading Components</h2>
        <Suspense fallback={<p>Loading component...</p>}>
          <LazyHome />
        </Suspense>
      </section>

      <section>
        <h2>5. Profiler Demo</h2>
        <ProfilerDemo />
      </section>
    </div>
  );
}
