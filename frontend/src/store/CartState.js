import React ,{useState}from 'react'
import CartContext from './CartContext';
export const CartState = (props) => {
    const [cartItem , setcartitems]= useState([]);
  return (
    <CartContext.Provider value={{cartItem , setcartitems}}>
        {props.children}
        </CartContext.Provider>    
  )
}
