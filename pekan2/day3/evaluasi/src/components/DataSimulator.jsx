import React, { useState, useEffect } from 'react';

function DataSimulator() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Mulai fetch data...');
    const timer = setTimeout(() => {
      setData({ nama: 'Ayyasy', role: 'Anak rajin' });
      setLoading(false);
      console.log('Data berhasil diambil!');
    }, 2000); 

    return () => {
      clearTimeout(timer);
      console.log('Timer dibersihkan');
    };
  }, []); 

  return (
    <div>
      <h2>Simulasi Fetch Data</h2>
      {loading ? <p>Memuat data...</p> : <p>Nama: {data.nama} | Role: {data.role}</p>}
    </div>
  );
}

export default DataSimulator;
