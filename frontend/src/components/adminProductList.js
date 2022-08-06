import React, { useContext, useEffect } from 'react'
import { AdminCart } from '../components/adminProduct';
import ProductContext from '../store/ProductContext';
import { Link, useNavigate } from "react-router-dom";

export const  AdminProductlist =(props)=>{

  // const toaddpage = ()=>{
  //   let navigate = useNavigate();
  //   navigate("../add");
  // }
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
        <div>
        <Link to = "/add" className='toadd'>ADD MORE PRODUCTS</Link>
        </div>
        
        {props.children}
        {ProductCtx.items.map((item, index) => < AdminCart itemimage={item.itemimage} itemname={item.itemname} itemprice={item.itemprice} itemdescription={item.itemdescription} key={index} />)
        }
        
        
      </div> 
    );
  
}