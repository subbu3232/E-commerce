import React, { useContext } from 'react';
import styles from './Cart.module.css';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../Conntexts/LoginContext';
import Swal from 'sweetalert2';

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = React.useState(1);
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity - 1));
  };

  return (
    <div className={styles.itemContainer}>
      <h3 className={styles.mtitle}>
        {item.title}
        <div className={styles.qcontroller}>
          <button className={styles.qbtn} onClick={decrement}>
            -
          </button>
          {quantity}
          <button className={styles.qbtn} onClick={increment}>
            +
          </button>
        </div>
      </h3>
      <h3 className={styles.mprice}>${item.price * quantity}</h3>
    </div>
  );
};

const Cart = ({ getdata }) => {
  const navigate = useNavigate();

  if (!Array.isArray(getdata) || getdata.length === 0) {
    return (
      <>
        <div className={styles.emptycart}>
          <h3>YOUR CART IS EMPTY </h3>
          <button className={styles.errbtn} onClick={() => navigate('/')}>
            SHOP NOW
          </button>
        </div>
      </>
    );
  }

  const getTotalcart = () => {
    let totalprice = 0;
    getdata.forEach((item) => {
      const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
      totalprice += cartItem ? item.price * cartItem.quantity : item.price;
    });
    return totalprice;
  };

  const [cartItems, setCartItems] = React.useState(
    getdata.map((item) => ({ ...item, quantity: 1 }))
  );

  const handleIncrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };
  const{isLogin}=useContext(LoginContext)

  return (
    <div className={styles.cartContainer}>
      <button className={styles.btn} onClick={() => navigate('/')}>
        Back To Home
      </button>
      <hr />
      <div className={styles.container}>
        {getdata.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            quantity={cartItems.find((cartItem) => cartItem.id === item.id)?.quantity || 1}
            onIncrement={() => handleIncrement(item.id)}
            onDecrement={() => handleDecrement(item.id)}
          />
        ))}
      </div>
      <hr style={{ marginTop: '1rem' }} />
      {/* <div className={styles.total}>
        <h3>Total: ${getTotalcart()}</h3>
      </div> */}

      <div className={styles.paymemt}>
        <button className={styles.pbtn} onClick={()=>{
          if(!isLogin){
            Swal.fire('Please Login Before Ordering')
navigate("/login")
          }else{
            navigate("/paymentpage")
          }
        }}>
          Proceed To Payment
        </button>
      </div>
    </div>
  );
};

export default Cart;
