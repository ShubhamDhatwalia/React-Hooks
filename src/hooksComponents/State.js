import React from 'react'
import { useState } from 'react';

function State() {

    const[color, setColor] = useState("red");
    const [car, setCar] = useState(
      {
        brand: 'Ford',
        model: 'mustang',
        color: 'red'
      }
    )

    const changeCarColor = ()=>{

      setCar((prevState)=>{
        return{...prevState, color:'blue'}
      });
    };

  return (
    <>
    <h1>My favorite color is {color} </h1>

    <button type='button' onClick={()=> setColor("blue")}>Change Color</button>

    <h1>My Car : {car.brand}: {car.model} : {car.color} </h1>
    <button onClick={changeCarColor}>Change Car Color</button>
    </>
  );
};

export default State;
