import React, { useState } from 'react'
import Authcontext from './Authcontext';

export const Authstate = (props) => {
   const [isloggedin ,setisloggedin]= useState(false);
  return (
    <Authcontext.Provider value={{isloggedin ,setisloggedin}}>
        {props.children}
    </Authcontext.Provider>
  )
}
