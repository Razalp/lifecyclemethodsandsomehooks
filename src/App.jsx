import { useEffect, useRef, useState } from 'react'
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
  const ref=useRef(0);
const refhandler=()=>{
  ref.current=ref.current+1;
}
const callbacked=()=>{
  console.log('callbacked when unmounted')
}

const [second,setSecond]=useState(0);
useEffect(()=>{
  // setTimeout(()=>{
  //   setSecond((second)=>second + 1)
  // },1000)
  return()=>{
    callbacked()
    
  }
},[refhandler])

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
      <h1>{second}</h1>
      <h1 ref={refhandler}>{count}</h1>
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
    

  )
}

export default App
