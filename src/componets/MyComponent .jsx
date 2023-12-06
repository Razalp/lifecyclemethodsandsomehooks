import React, { useEffect } from 'react';

const MyComponent = ({ onUnmount }) => {
  // useEffect with cleanup function
  useEffect(() => {
    // Code to run when component mounts

    // Cleanup function to run when component unmounts
    return () => {
      console.log('Component will unmount');
      // Run the provided callback function on unmount
      if (typeof onUnmount === 'function') {
        onUnmount();
      }
    };
  }, [onUnmount]); // Include the callback function in the dependency array

  // Rest of your component code

  return <div>My Component</div>;
};

export default MyComponent;
