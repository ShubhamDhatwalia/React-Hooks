import React, { useReducer } from 'react'

const intialState = 0;

const reducer = (state, action)=>{
    switch(action){
        case "+" :
            return state+1;
        case "-" :
            return state-1;
        default :
        return state
    }
}

function Reducer() {

   const[count, dispatch] = useReducer(reducer, intialState);

  return (
    <>

    <h1>UseREducer hook ::::::</h1>
    <button onClick={()=>dispatch("+")}>+</button>
    <button onClick={()=>dispatch("-")}>-</button>

    <h5>Count : {count}</h5>
    </>
  )
}

export default Reducer
