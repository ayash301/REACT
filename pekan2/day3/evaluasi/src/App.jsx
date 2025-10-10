import React, { useState } from 'react';


import EffectLogger from './components/EffectLogger';
import UserFetcher from './components/UserFetcher';
import WindowTracker from './components/WindowTracker';
import MultiEffectDemo from './components/MultiEffectDemo';
import DataSimulator from './components/DataSimulator';

function App() {
  const [activeTask, setActiveTask] = useState(null);

  return (
    <div style={styles.container}>

      {/* Navigasi antar tugas */}
      <div style={styles.nav}>
        <button style={styles.btn} onClick={() => setActiveTask(1)}>Tugas 1</button>
        <button style={styles.btn} onClick={() => setActiveTask(2)}>Tugas 2</button>
        <button style={styles.btn} onClick={() => setActiveTask(3)}>Tugas 3</button>
        <button style={styles.btn} onClick={() => setActiveTask(4)}>Tugas 4</button>
        <button style={styles.btn} onClick={() => setActiveTask(5)}>Tugas 5</button>
      </div>

      {/* Menampilkan komponen sesuai tugas yang dipilih */}
      <div style={styles.box}>
        {activeTask === 1 && <EffectLogger />}
        {activeTask === 2 && <UserFetcher userId={1} />}
        {activeTask === 3 && <WindowTracker />}
        {activeTask === 4 && <MultiEffectDemo />}
        {activeTask === 5 && <DataSimulator />}

        {!activeTask && (
          <p style={styles.note}>
            Silakan pilih salah satu tugas di atas untuk melihat hasilnya 👆
          </p>
        )}
      </div>
    </div>
  );
}


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '2rem',
    textAlign: 'center',
    backgroundColor: '#f5f6fa',
    minHeight: '100vh',
  },
  title: {
    color: '#2f3640',
  },
  nav: {
    margin: '1.5rem 0',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.75rem',
    flexWrap: 'wrap',
  },
  btn: {
    backgroundColor: '#40739e',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.3s',
  },
  box: {
    marginTop: '2rem',
    padding: '2rem',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  note: {
    color: '#718093',
    fontStyle: 'italic',
  },
};

export default App;
