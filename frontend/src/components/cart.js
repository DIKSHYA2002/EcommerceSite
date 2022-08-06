import React ,{useContext} from "react";
import CartContext from "../store/CartContext";
import { Cartproducts } from "./Cartproducts";
import { Totalamount } from "./totalamount";
import './cart.css';


export function ShoppingCart(props) {

  const Cartctx = useContext(CartContext);
   const items = Cartctx.cartItem;
    return(
      <div className="bag-container">

           <div className="eachItem">
       { items.map((item,index)=><Cartproducts itemname = {item.itemname} itemprice = {item.itemprice} quantity = {item.quantity} key={index}/>)}
       
           </div>
           <div className="totalamount"><Totalamount/></div>
           
      </div>
    );
}