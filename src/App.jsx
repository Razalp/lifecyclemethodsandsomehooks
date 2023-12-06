import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Costemshooksss from './componets/Costemshooksss'
import LifecycleExample from './componets/LifecycleExample'
import MyComponent from './componets/MyComponent '
import CoustumHookes from './componets/CoustumHookes'


function App() {
  const [data, setData] = useState([]);
  const {count , increment ,decrement}=CoustumHookes()
const callback=()=>{
  console.log('hello am callback')
}
const callbackreturn=()=>{
  console.log('hello am unmounting callback')
}

useEffect(() => {
  console.log('hello am mounting');
  callback();
  return () => {
    console.log('hello am unmounting');
    callbackreturn();
  };
}, []);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  fetchData();
}, []);

  

  return (

      <>
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <div>
        {data.map((post) => (
          <div key={post.id}>
            <h1>{post?.id}</h1>
          </div>
        ))}
      </div>
    </div>
  </>
    

  )
}

export default App
