import React, { useState } from "react";

const Child = React.memo(({ count }) => {
  console.log("Child component rendered!");
  return <p>Nilai count dari parent: {count}</p>;
});

export default function ReactMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="card">
      <h3>React.memo Example</h3>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <input
        type="text"
        placeholder="Ketik sesuatu..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Child count={count} />
    </div>
  );
}
