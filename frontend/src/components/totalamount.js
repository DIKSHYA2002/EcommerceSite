import React,{useContext} from 'react'
import CartContext from '../store/CartContext'

export const Totalamount = () => {
    const Cartctx = useContext(CartContext);
    const items = Cartctx.cartItem;
    let Total=0;
    const deletes=()=>{
      Cartctx.setcartitems([]);
    }
  return (
    
    <div>
    { items.map((item,index)=>
     {Total= Total + Number(item.itemprice)* Number(item.quantity)}
    )}
    total: ${Total}  <button className="delete" onClick={deletes} >delete</button></div> 
  )
}
