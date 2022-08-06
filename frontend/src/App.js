import { useState, useEffect,useContext } from 'react';
import { Header, Cart } from './components/Sneakers';
import { Productform } from './components/Product-form';
import { Homepage } from './components/landing-page';
import { AdminForm } from './components/admin-form';
import { Productlist } from './components/Product-list';
import { ProductState } from './store/ProductState';
import {  Routes, Route , Link} from 'react-router-dom';
import { ShoppingCart } from './components/cart';
import { CartState } from './store/CartState';
import CartContext from './store/CartContext';
import { Navbar } from './components/Navbar';
import { AdminProductlist } from './components/adminProductList';
import { Footer } from './components/Footer';
import { Authstate } from './store/Authstate';
function App() {
  const Cartctx = useContext(CartContext);
 const [noofitems,setnoofitems]= useState(0);
  return (
     <div>
       <ProductState>
       <CartState>
        <Authstate>
        <Navbar/>
        <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/add' element={<Productform />}/>
        <Route path='/admin-login' element={<AdminForm />}/>
        <Route path='/allproducts' element={<Productlist />}/>
        <Route path='/cart' element={<ShoppingCart />}/>
        <Route path='/ADMINCART' element={<AdminProductlist/>}/>
     
        </Routes>
        <Footer/>
       </Authstate>
        </CartState>
       </ProductState>
       
 
      </div>


  );
}

export default App;
