import {useState} from "react";
import Counter from "./components/Counter";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);

  const handleAdd =() => {setCount(count + 1)};
  const handleMinus =() => {setCount(count - 1)};


  return (
    <div>
      <h1>materi</h1>
      <Counter count={count} handleAdd={handleAdd} handleMinus={handleMinus} />
    </div>
  )
}
export default App;