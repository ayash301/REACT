import React, { useState, useCallback } from "react";

function List({ getItems }) {
  const [items, setItems] = useState([]);

  React.useEffect(() => {
    setItems(getItems());
  }, [getItems]);

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [count, count + 1, count + 2];
  }, [count]);

  const themeStyles = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
    padding: "10px",
    borderRadius: "8px",
  };

  return (
    <div className="card" style={themeStyles}>
      <h3>useCallback Example</h3>
      <button onClick={() => setCount(count + 1)}>Tambah Count</button>
      <button onClick={() => setDark(!dark)}>Ganti Tema</button>
      <List getItems={getItems} />
    </div>
  );
}
