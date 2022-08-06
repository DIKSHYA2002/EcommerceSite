
import './Sneakers.css';
import  React ,{useContext} from 'react';
import axios from 'axios';
import ProductContext from '../store/ProductContext';

export function AdminCart(props)
{
    const ProductCtx = useContext(ProductContext);

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
             
                <input type="button" className='DELETE' value="Delete" onClick={deletehandler}  ></input>
                </div>
                </div>
            </div>
        </div>
    )
}