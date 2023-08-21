
import { useRef, useState } from 'react';
import Styles from './PaymentPage.module.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const PaymentPage = () => {
const[card,setCard]=useState(false)
const ipref=useRef([])
const cvvref=useRef(null)
const mthref=useRef(null)
const yrref=useRef(null)
const navigate=useNavigate("")
const [select,setSelect]=useState(false)
const cardHandler=(e)=>{
  setSelect(true)
if(e.target.value=="credit_card"){
    setCard(true)
}else{
    setCard(false)
}
}
const handleripChange=(index,value)=>{
if (value.length<=4){
    const updatedValue = value.replace(/\D/g, '');
    const carddetails=[...ipref.current]
    carddetails[index].value=updatedValue
    if(value.length===4 &&index<3){
        ipref.current[index+1].focus()
    }
}
}
const paymentHandler=()=>{
 
    if(card){
        Swal.fire({
            icon: 'error',
            title: 'Apologies',
            text: 'Currently We Are Not Accepting Orders From "CARD PAYMENT" Try To Order "COD"',
            
          })
    }
    else if(!select){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please Select Payment Methods',
        
      })
    }
    else{
        ! 
Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'Order Placed Successfully You Will Recieve Update Soon ',
  showConfirmButton: false,
  timer: 5000
})
navigate("/")

    }
}
  return (
    <div className={Styles.container}>
      
      <div className={Styles.paymentBox}>
      <img className={Styles.logo}src='https://i.ibb.co/F4D2M3j/eazycartloho-removebg-preview.png'>
   </img>
        <label htmlFor="paymentMethod">Select Payment Method</label>
        <select
          id="paymentMethod"
          className={Styles.paymentDropdown}
       onChange={cardHandler}
        >
          <option value="">Select Payment Method</option>
          <option value="credit_card">Credit Card/Debit Card</option>
          <option value="cash_on_delivery">Cash on Delivery</option>
        </select>
      
            {card && (
                <>
                <label className={Styles.cardDetailsLabel}>Enter Card Details</label>
                      <div className={Styles.carddetails}>
            
            <input type="text" maxLength={4}  placeholder="enter" id="cardNumber1"onChange={(e)=>{handleripChange(0,e.target.value)}}
            ref={(ip)=>(ipref.current[0]=ip)} />
            <input type="text" maxLength={4} placeholder="card"onChange={(e)=>{handleripChange(1,e.target.value)}}
            ref={(ip)=>(ipref.current[1]=ip)} />
            <input type="text" maxLength={4} placeholder="num"onChange={(e)=>{handleripChange(2,e.target.value)}}
            ref={(ip)=>(ipref.current[2]=ip)}/>
            <input type="text" maxLength={4}placeholder="here"onChange={(e)=>{handleripChange(3,e.target.value)}}
            ref={(ip)=>(ipref.current[3]=ip)} />
            
            
          </div>
          <div className={Styles.extrafields}>
          <input className={Styles.eip}
                type="tel"
                maxLength={3}
                placeholder='CVV'
                ref={cvvref}
                id="cvv"
                name="cvv"
              />
                 <input  className={Styles.eip}
                type="tel"
                maxLength={2}
                placeholder='MONTH'
                ref={mthref}
                id="mth"
                name="mth"
              />
              <input  className={Styles.eip}
                type="tel"
                maxLength={4}
                placeholder='YEAR'
                ref={yrref}
                id="yr"
                name="yr"
              />



          </div>

                </>
    )}
        <button className={Styles.proceedButton} onClick={paymentHandler} >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
