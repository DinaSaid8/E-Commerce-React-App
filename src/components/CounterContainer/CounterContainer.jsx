
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../redux/counterSlice";
import Button from '../buttons/Button';

export default function CounterContainer() {
  // const [count, setCount] = useState(0);

// global State
  const counterGlobalValue = useSelector(state => state.counter.counter)
  // console.log(counterGlobalValue);

  // dispatch
  const dispatch= useDispatch()
  //redux
  let incrementCount = () => {
    // setCount(count + 1);
    //action from redux
    dispatch(increment(1))
    console.log(counterGlobalValue);
  };

  let decrementCount = () => {
      // if (count > 0) {
        // setCount(count - 1);
            //action from redux
            dispatch(decrement(1))

      // } else {
          // setCount(count)
  }


    
   
  // console.log(counterGlobalValue);

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
        {/* <button className="btn btn-danger m-4 px-5" onClick={reset}>Reset</button> */}

        </div>
      </div>
    </div>
  );
}
