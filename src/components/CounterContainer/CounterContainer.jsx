
import { useState } from "react";
import Button from '../buttons/Button';

export default function CounterContainer() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
      if (count > 0) {
        setCount(count - 1);

      } else {
          setCount(count)
      }
    };
    
    let reset = () => {
        setCount(0);
      };

  return (
    <div className="container text-center p-5 mt-5 shadow rounded-4">
      <div>
        <div>
          <h3>Simple Counter App :</h3>
          <h1>{count}</h1>
        </div>
        <div>
        <Button title={"-"} action={decrementCount} />
        <Button title={"+"} action={incrementCount} />
        <button className="btn btn-danger m-4 px-5" onClick={reset}>Reset</button>

        </div>
      </div>
    </div>
  );
}
