import React from 'react'
import { useContext } from 'react';
import {UserContext} from './Context';


function Context2() {
    const user = useContext(UserContext);
  return (
    <h5>Hello {user} again !</h5>
  )
}

export default Context2;
