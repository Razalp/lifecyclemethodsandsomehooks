import { useState } from 'react';

// Custom hook for managing a counter
const CoustumHookes = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };
  // useEffect(() => {
  //   console.log(`Count changed: ${count}`);
  // }, [count]);

  return {
    
    count,
    increment,
    decrement,
  };
};

export default CoustumHookes;