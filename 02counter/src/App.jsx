import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)

  //let counter = 15;

  const incValue =() => {
    setCounter(counter + 1);
    console.log("value incremented",counter);
    //counter = counter + 1;
  };

  const decValue =() => {
    setCounter(counter - 1);
    console.log("value decremented",counter);
  };

  return (
    <>
      <h1> COUNTER</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={incValue}>Increment value</button>
      <br/>
      <button onClick={decValue}>Decrement value</button>   
    </>
  )
}

export default App
