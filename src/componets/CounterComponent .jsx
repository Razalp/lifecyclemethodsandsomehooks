import React from 'react';
import CoustumHookes from './CoustumHookes';

const CounterComponent = () => {
  const { count, increment, decrement } =  CoustumHookes(); // Fix the typo here

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;
