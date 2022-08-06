import { useState, useEffect,useContext } from 'react';
import {  Routes, Route , Link} from 'react-router-dom';
import CartContext from '../store/CartContext';
import {FaHome} from 'react-icons/fa';
import {GrUserAdmin } from 'react-icons/gr';
import { FaShoppingBag} from 'react-icons/fa';

export function Navbar() {
    const Cartctx = useContext(CartContext);
    const [noofitems,setnoofitems]= useState(0);
    useEffect(()=>{
       setnoofitems(Cartctx.cartItem.length);
      },[Cartctx.cartItem]);
    return (
        <div>
          <nav>
           <ul>
             <li><Link to = "/">Homepage    <FaHome/></Link></li>
             <li><Link to = "/admin-login">Admin-login <GrUserAdmin/></Link></li>
             <li><Link to = "/cart"><FaShoppingBag/>  {noofitems}</Link></li>
           </ul>
        </nav>
         </div>
    
    
     );
    
}

