import React, { useState, useEffect } from 'react';

function WindowTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    console.log('Event listener "resize" ditambahkan');

 
    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('Event listener "resize" dihapus');
    };
  }, []); 

  return (
    <div>
      <h2>Ukuran Jendela</h2>
      <p>Lebar: {width}px</p>
      <p>Tinggi: {height}px</p>
    </div>
  );
}

export default WindowTracker;
