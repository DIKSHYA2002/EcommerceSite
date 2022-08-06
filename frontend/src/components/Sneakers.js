import './Sneakers.css';
import  React ,{useContext} from 'react';
import CartContext from '../store/CartContext';
import axios from 'axios';
import ProductContext from '../store/ProductContext';

export function Cart(props)
{
    const ProductCtx = useContext(ProductContext);
    const Cartctx = useContext(CartContext);
    const buynowhandler=()=>{
       const CartOBject =
       {
            itemname : props.itemname,
            quantity: 1,
            itemprice:props.itemprice
        }
        let cartItem = [...Cartctx.cartItem];
       cartItem =cartItem.filter(cartitem=>cartitem.itemname===props.itemname);
        if(cartItem.length>0)
        {
           cartItem[0].quantity =cartItem[0].quantity +1;
        //    cartItem[0].itemprice = Number(cartItem[0].itemprice)* cartItem[0].quantity;
        }
        else{
            Cartctx.setcartitems([...Cartctx.cartItem,CartOBject]);
        }
    }

    const deletehandler=()=>{

        deleteDATA();
    }
    const deleteDATA = async ()=>{
         const message = await axios.delete(`http://localhost:4001/deleteitem/${props.itemname}`,{
          headers:{
              'Content-Type':'application/json',
          }

         })
         console.log("deleted data",message);
          let Item = [...ProductCtx.items];
         let items = ProductCtx.items;
        items=  items.filter((item)=>item.itemname!== props.itemname);
        ProductCtx.setItems(items);
       
      }
    return (
        <div className='cart_items'>
            <div className='item-container'>
                <div><img src={props.itemimage} className='itemimage'></img></div>
                <div className='itemname'><h3>{props.itemname}</h3></div>
                <div className='itemprice'><h3>${props.itemprice}</h3></div>
                <div className='itemdescription'>
                <h3>{props.itemdescription}</h3>
                <div className='btns'>
                <input type="button" className='buyNow' value="buy Now"onClick= {buynowhandler}></input>
                </div>
                </div>
            </div>
        </div>
    )
}