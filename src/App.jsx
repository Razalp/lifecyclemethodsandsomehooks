import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Costemshooksss from './componets/Costemshooksss'
import LifecycleExample from './componets/LifecycleExample'
import MyComponent from './componets/MyComponent '
import CoustumHookes from './componets/CoustumHookes'


function App() {
  const {count , increment ,decrement}=CoustumHookes()
const callback=()=>{
  console.log('hello am callback')
}
const callbackreturn=()=>{
  console.log('hello am unmounting callback')
}

  useEffect(()=>{
    console.log('hello am mounting')
    callback()
    return()=>{
      console.log('hello am unmounting')
      callbackreturn()
    }
  },[])

  return (
    <>
    <div>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
    
   
    </>
  )
}

export default App
