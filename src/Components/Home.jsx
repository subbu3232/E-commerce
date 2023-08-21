import React, { useContext, useEffect,useState } from 'react'
import styles from '../Components/Home.module.css'
import Productcard from './Productcard.jsx'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

// import Cart from './Cart.jsx'
import route from '../routes/route.json'
import { LoginContext } from '../Conntexts/LoginContext'
const Home=({fetchdata})=>{
    const navigate=useNavigate()
    const[data,setData]=useState([])
      const [cartItems, setCartItems] = useState([]);
const{isLogin,UserName,LogoutHandler}=useContext(LoginContext)
   useEffect(()=>{
    fetch("https://fakestoreapi.com/products/").then((res)=>{
       return res.json()
    }).then((data)=>{
        setData(data)
      
    })
   },[])
   const addToCartHandler = (id, title, price,image) => {
    const newItem = { id, title, price,image };
    setCartItems((prevCartItems) => [...prevCartItems, newItem]);
    fetchdata(newItem);
  };

const [search,setSearch]=useState("")
const searchFilter = data.filter((details) =>
  details.title.toLowerCase().includes(search.toLowerCase())
);

return (
<>
{isLogin && <div className={styles.user}>Welcome! {UserName}</div>}
<div className={styles.search}>
    <img className={styles.logo}src='https://i.ibb.co/F4D2M3j/eazycartloho-removebg-preview.png'>
   </img>
   {/* <Cart/> */}
    <input type='text'placeholder='Search Products'onChange={(e)=>{setSearch(e.target.value)}} className={styles.srchbox}></input>
    {/* <button className={styles.srchbtn}>🔍</button> */}

</div>
<div className={styles.header}>
        {/* <div className={styles.hdrbtn}onClick={() => navigate(route.LOGIN)}>Login</div> */}
        {isLogin ?<div className={styles.hdrbtn} onClick={() => {
      LogoutHandler();
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Logout Successfully',
        showConfirmButton: false,
        timer: 1500,
      });
    }}>Logout</div>:<div className={styles.hdrbtn}onClick={() => navigate(route.LOGIN)}>Login</div>}
        {/* <div className={styles.hdrbtn}onClick={() => {
        // 
        if(!isLogin){
            Swal.fire('Please Login Before Going to Account Page')
        }else{
            navigate(route.ACCOUNT)
        }
    }
        
        }>Account</div> */}
        <div className={styles.hdrbtn}onClick={() => navigate("/contactus")}>Contact Us</div>
        <div className={styles.hdrbtn}onClick={() =>{
navigate(route.CART)

        } } >🛒</div>
</div>
<div className={styles.banner}>
     {/* <h1>Hot Sale Going Live! Shop Now</h1> */}
     <h1>The Sale Is On</h1>
</div>

<div className={styles.products}>

  {search === '' ? (
    data.map((products) => (
      <Productcard
        key={products.id}
        image={products.image}
        title={products.title}
        price={products.price}
        addtocart={addToCartHandler}
      />
    ))
  ) :(searchFilter.length===0?(<div className={styles.noproducts}>NoProucts Found</div>):(searchFilter.map((products) => (
    <Productcard
      key={products.id}
      image={products.image}
      title={products.title}
      price={products.price}
      addtocart={addToCartHandler}
    />)) 
    
    )
  )}
</div>




</>


)


}
export default Home;