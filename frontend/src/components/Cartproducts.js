import React,{useContext} from "react";
import CartContext from "../store/CartContext";

export const Cartproducts = (props) => {
    const Cartctx = useContext(CartContext);
   let cartItem = [...Cartctx.cartItem];
   cartItem =cartItem.filter(cartitem=>cartitem.itemname===props.itemname);
   console.log(cartItem);
     const inc=()=>{
     if(cartItem[0].quantity >=1)
     {
        cartItem[0].quantity+=1;
        Cartctx.setcartitems([...Cartctx.cartItem])
     }
     }
  const dec=()=>{
    if(cartItem[0].quantity >=2)
    {
        cartItem[0].quantity -=1;
        Cartctx.setcartitems([...Cartctx.cartItem]);
    }
     
  }
  return (
    <div className="Cart-container">
            <div className="nameofProduct">
                    {props.itemname}
            </div>
            <div className="quantityofProduct">
                     <button className="addmore" onClick={inc} >+</button>{props.quantity}<button className="reduce" onClick={dec}>-</button>
            </div>
            <div className="priceofproduct">
            Price:  ${ Number(props.itemprice)*Number(props.quantity)}
            </div>
    </div>
  )
}

