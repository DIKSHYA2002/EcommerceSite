import React, { useContext, useEffect } from 'react'
import { Cart } from '../components/Sneakers';
import ProductContext from '../store/ProductContext';


export const  Productlist =(props)=>{

  const ProductCtx = useContext(ProductContext);

  useEffect(()=>{
     getItems();
  },[])
  const getItems = async () => {
    const data = await fetch("http://localhost:4001/");
    const items_data = await data.json();
    ProductCtx.setItems(items_data.products);
  }
    return (
      <div>
        
        {props.children};
        {ProductCtx.items.map((item, index) => <Cart itemimage={item.itemimage} itemname={item.itemname} itemprice={item.itemprice} itemdescription={item.itemdescription} key={index} />)
        }
      </div> 
    );
  
}
