import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";

const Counter: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="text-center p-5">
      <h2 className="text-2xl mb-3">Counter: {count}</h2>
      <button
        onClick={() => dispatch(increment())}
        className="m-1 px-3 py-1 bg-green-500 text-white rounded"
      >
        +1
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="m-1 px-3 py-1 bg-red-500 text-white rounded"
      >
        -1
      </button>
      <button
        onClick={() => dispatch(incrementByAmount(5))}
        className="m-1 px-3 py-1 bg-blue-500 text-white rounded"
      >
        +5
      </button>
    </div>
  );
};

export default Counter;
