import React, { useState, useEffect } from "react";

function EffectLogger() {
    const [count, setCount] = useState(0)

    useEffect (() => {
        console.log('component telah di update')

    })
return(
    <div>
        <h2>Tugas 1</h2>
    <p>COunt: {count}</p>
   <button onClick={() => setCount(prev=>prev +1)}>
    tambah count
   </button>
    </div>
)
}
export default EffectLogger

