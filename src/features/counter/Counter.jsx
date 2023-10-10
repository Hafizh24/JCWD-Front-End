import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy5 } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementBy5())}>Increment by 5</button>
      </div>
    </>
  );
};

export default Counter;
