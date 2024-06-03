import React, { useEffect, useRef, useState } from 'react'

function Ref() {
    const [input, setInput] = useState("") 

    const count = useRef(0);
    const prevValue = useRef("");
    count.current = input.length;
    

    useEffect(()=>{
        prevValue.current = input;
    })

  return (

    <>
    <h2>useRef Hooks</h2>
    <input type="text" 
    value={input}
    onChange={(e)=> setInput(()=>e.target.value)}/>
    <h4>Current Value: {input} </h4>
    <h4>Prev Value: {prevValue.current} </h4>
   
    <h3>Count: {count.current} </h3>
    </>
  )
}


export default Ref
