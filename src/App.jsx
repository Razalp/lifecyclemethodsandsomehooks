import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Costemshooksss from './componets/Costemshooksss'
import LifecycleExample from './componets/LifecycleExample'
import MyComponent from './componets/MyComponent '
import CoustumHookes from './componets/CoustumHookes'
import axios from 'axios';

function App() {
  // State to hold data fetched from an API
  const [data, setData] = useState([]);

  // Custom hook for managing a count state
  const { count, increment, decrement } = CoustumHookes();

  // State to handle errors during rendering
  const [hasError, setHasError] = useState(false);

  // Error boundary for catching errors in the component tree
  const componentDidCatch = (error, errorInfo) => {
    console.log('error boundary', error, errorInfo);
    setHasError(true);
  }

  // Ref to keep track of the current value across renders
  const ref = useRef(0);
  const refHandler = () => {
    ref.current = ref.current + 1;
  }

  // Callback function called when the component is unmounted
  const callbackUnmounted = () => {
    console.log('callback when unmounted');
  }

  // State and effect to demonstrate mounting and unmounting
  const [second, setSecond] = useState(0);

  useEffect(() => {
    // setTimeout(()=>{
    //   setSecond(second => second + 1);
    // },1000)
  }, [refHandler])


  useEffect(() => {
    return () => {
      callbackUnmounted();
    }
  }, [refHandler]);

  // Effects to demonstrate mounting and unmounting with callbacks
  const callback = () => {
    console.log('hello, I am a callback');
  }
  const callbackUnmount = () => {
    console.log('hello, I am an unmounting callback');
  }

  useEffect(() => {
    console.log('hello, I am mounting');
    callback();
    return () => {
      console.log('hello, I am unmounting');
      callbackUnmount();
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios('https://jsonplaceholder..com/posts');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {hasError ? <div>Error occurred!</div> : <div>Your regular content goes here</div>}
      <div>
        <h1>{second}</h1>
        <h1 ref={refHandler}>{count}</h1>
        <h1>{ref.current}</h1>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <div>
          {data.map((post) => (
            <div key={post.id}>
              <h1>{post?.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
