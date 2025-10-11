import React, { useState, useEffect } from 'react';

function MultiEffectDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Count sekarang: ${count}`);
  }, [count]);

  useEffect(() => {
    console.log(`Nama berubah: ${name}`);
  }, [name]);

  return (
    <div>
      <h2>Demo Multiple useEffect</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Tambah</button>
      <br /><br />
      <input
        type="text"
        placeholder="Ketik nama"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Nama: {name}</p>
    </div>
  );
}

export default MultiEffectDemo;
