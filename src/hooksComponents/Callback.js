import React, { useCallback, useState} from 'react'
import Child from './Child';

function Callback() {

    const[add, setAdd] = useState(0);

    const learning = useCallback(   function learn(){
        // SOme operations
    },[])
 

  return (
    <>
    <h2>Learning useCallback :: </h2>

    <button onClick={()=>setAdd(add+1)}>Add: </button>
    <span>{add}</span>

    <Child learning = {learning}/>
    </>
  )
}

export default Callback;
