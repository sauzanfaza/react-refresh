import { useState, useEffect } from 'react';
import CounterButton from './CounterButton';

export default function Counter({ initialValue, step }) {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
      console.log('counter jalan')
  }, [counter])

  return (
    <div className='flex flex-col items-center p-4'>
      <h1 className='text-3xl font-semibold mb-4'>{counter}</h1>

      <div className='flex gap-2 mb-4'>
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
    </div>
  );
}