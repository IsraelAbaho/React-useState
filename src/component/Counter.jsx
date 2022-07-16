import React from 'react'
import './counter.css'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
  return (
    <div className='calc'>
     <button onClick={()=> setCounter((prevCounter)=> prevCounter - 1)}>-</button>
     <h1>{counter}</h1>
     <button onClick={()=> setCounter((prevCounter)=> prevCounter + 1)}>+</button>
    
  
    </div>
  )
}

export default Counter