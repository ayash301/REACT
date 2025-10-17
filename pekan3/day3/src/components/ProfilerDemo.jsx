import React, { Profiler, useState } from "react";

function BoxList({ count }) {
  const boxes = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <div className="boxes">
      {boxes.map((num) => (
        <div key={num} className="box">
          {num}
        </div>
      ))}
    </div>
  );
}

export default function ProfilerDemo() {
  const [count, setCount] = useState(10);

  const onRenderCallback = (
    id,
    phase,
    actualDuration
  ) => {
    console.log(`${id} rendered in ${actualDuration.toFixed(2)} ms (${phase})`);
  };

  return (
    <div className="card">
      <h3>React Profiler Example</h3>
      <button onClick={() => setCount(count + 5)}>Tambah Kotak</button>
      <Profiler id="BoxList" onRender={onRenderCallback}>
        <BoxList count={count} />
      </Profiler>
    </div>
  );
}
