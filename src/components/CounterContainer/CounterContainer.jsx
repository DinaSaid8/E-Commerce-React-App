// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import Button from "../buttons/Button";

export default function CounterContainer() {
  // global State
  const counterGlobalValue = useSelector((state) => state.counter.counter);

  // dispatch
  const dispatch = useDispatch();
  //redux
  let incrementCount = () => {
    //action from redux
    dispatch(increment(1));
    console.log(counterGlobalValue);
  };

  let decrementCount = () => {
    //action from redux
    dispatch(decrement(1));
  };

  return (
    <div className="container text-center p-5 mt-5 shadow rounded-4">
      <div>
        <div>
          <h3>Support Us $</h3>
          <h1>{counterGlobalValue} $</h1>
        </div>
        <div>
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
