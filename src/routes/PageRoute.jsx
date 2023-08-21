import React, { useState } from 'react'
import Home from '../Components/Home'
import Cart from '../Components/Cart'
import {Routes,Route} from 'react-router-dom'
import route from './route.json'
import Error from '../Components/Error'
import Login from '../Components/Login'
import Register from '../Components/Register'
// import Account from '../Components/Account'
import Contactus from '../Components/Contactus'
import Account from '../Components/Account'
import PaymentPage from '../Components/PaymentPage'
const PageRoute=()=>{
const[cartitems,setCartitems]=useState([])
const addtocart = (data) => {
    setCartitems((prevCartItems) => [...prevCartItems, data]);
  };
  
console.log(cartitems)
return(
    <Routes>
    <Route path={route.HOME}element={<Home fetchdata={addtocart}/>}/>
    <Route path={route.CART}element={<Cart getdata={cartitems}/>}/>
    <Route path={route.LOGIN}element={<Login/>}/>
    {/* <Route path={route.ACCOUNT}element={<Account/>}/> */}
    <Route path={route.ACCOUNT}element={<Account/>}/>
    <Route path={route.CONTACTUS} element={<Contactus to="contactus.eazycart@gmail.com" />} />
    <Route path={route.REGISTER}element={<Register/>}/>
    <Route path={route.PAYMENTPAGE}element={<PaymentPage/>}/>
    <Route path={"*"}element={<Error/>}/>
     </Routes> 

)

}
export default PageRoute