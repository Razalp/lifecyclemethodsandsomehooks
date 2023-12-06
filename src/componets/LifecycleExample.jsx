import React, { useState, useEffect } from 'react';

const LifecycleExample = () => {
  // State to track the component update
  const [counter, setCounter] = useState(0);

  // Component Mounting Phase
  useEffect(() => {
    console.log('Component Mounted');
    
    // Component Unmounting Phase
    return () => {
      console.log('Component Will Unmount');
    };
  }, []); // The empty dependency array ensures that the effect runs only once during mounting

  // Component Update Phase
  useEffect(() => {
    console.log('Component Updated');
    
    // Cleanup logic (optional) for the next update
    return () => {
      console.log('Cleanup for next update');
    };
  }, [counter]); // Runs every time the 'counter' state changes

  const handleButtonClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={handleButtonClick}>Increment Counter</button>
    </div>
  );
};

export default LifecycleExample;
