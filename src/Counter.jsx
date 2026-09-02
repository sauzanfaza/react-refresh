import { useState } from 'react';
import CounterButton from './CounterButton';

export default function Counter({ initialValue, step }) {
  const [counter, setCounter] = useState(initialValue);

  return (
    <div>
      <h1>{counter}</h1>

      <CounterButton
        disabled={counter === 10}
        onClick={() => setCounter(counter + step)}
      >
        +
      </CounterButton>

      <CounterButton
        disabled={counter === initialValue}
        onClick={() => setCounter(initialValue)}
      >
        Reset
      </CounterButton>

      <CounterButton
        disabled={counter === 0}
        onClick={() => setCounter(counter - 1)}
      >
        -
      </CounterButton>
    </div>
  );
}