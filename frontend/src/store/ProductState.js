import React, { useState } from 'react'
import ProductContext from './ProductContext'

export const ProductState = (props) => {
    const [items , setItems] = useState([]);
  return (
   <ProductContext.Provider value={{items , setItems}}>
   {props.children}
   </ProductContext.Provider>
  );
}
