import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter
      <h1>{counter}</h1>
      <button disabled={counter === 10} onClick={() => setCounter(counter + 1)}>
        +
      </button>
      <button onClick={() => setCounter(0)}>Reset</button>
      <button disabled={counter === 0} onClick={() => setCounter(counter - 1)}>
        -
      </button>
    </div>
  );
}
