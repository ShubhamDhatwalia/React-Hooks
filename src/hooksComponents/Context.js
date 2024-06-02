import { useState,  createContext } from "react";
import Context2 from './Context2';
import React from 'react'
import Context1 from "./Context1";

export const UserContext = createContext();

function Context() {
    const[user, setUser] = useState('Shubham');

  return (
   
    <UserContext.Provider value={user}>

        <h1>Practicing useContext Hook</h1>
        <h5>Hello {user} !</h5>
        <Context1 />
        <Context2 />
    </UserContext.Provider>
  )
}

export default Context;
