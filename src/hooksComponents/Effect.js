import React, { useEffect } from 'react'
import { useState } from 'react'

function Effect() {

    const[count, setCount] = useState(0);
    const[cal, setCal] = useState(0);
    

    useEffect(()=>{

       setCal(()=> count*2)
    }, [count])


  return (
    <>
    <h2>useEffect hook :::</h2>
    <h4>Rendering Count : {count}</h4>
    <button onClick={()=> setCount(()=>count+1)}>+</button>
    <button onClick={()=> setCount(()=>count-1)}>-</button>
    <h4>Calculation: {cal}</h4>
    </>
    
  )
}

export default Effect
