interface CounterProps {
 count: number;
 handleAdd: () => void;
 handleMinus: () => void;
}

function Counter ({ count, handleAdd, handleMinus}: CounterProps) {
    return (
        <>
        <div  style={{display:"flex", marginTop: "50px", gap: "10px", justifyContent: "center", alignItems: "center"}}>
            <button onClick={handleMinus}>Minus</button>
            <p>{count}</p>
            <button onClick={handleAdd}>Plus</button>
        </div>
        
        
        </>
    )
}
export default Counter;