import React, { useRef } from "react";

const UseRefDemo = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const focusInput = () => {
    inputRef.current?.focus();
    inputRef.current!.value = "Fokus berhasil!";
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Klik tombol untuk fokus" />
      <button onClick={focusInput} style={{ marginLeft: "10px" }}>
        Fokus Input
      </button>
    </div>
  );
};

export default UseRefDemo;
