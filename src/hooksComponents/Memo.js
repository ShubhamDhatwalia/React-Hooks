import React, { useState, useMemo } from 'react'




function Memo() {

    const[add, setAdd] = useState(0);
    const[substract, setMinus] = useState(100);

    const multiplication = useMemo(function multiply(){
        console.log("running");
        return add*10;
        
    },[add])

    

  return (
    <>
    <h2>Learning Memo :: </h2>
    <button onClick={()=>setAdd(add+1)}>Add : </button>
    <span>{add}</span>
    <br />
    <button onClick={()=>setMinus(substract-1)}>Subtract : </button>
    <span>{substract}</span>
    <br />
    {multiplication}
    </>
  )
}

export default Memo
