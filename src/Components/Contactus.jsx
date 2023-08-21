import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Contactus.module.css';
import Swal from 'sweetalert2';

const Contactus = ({ to }) => {
    console.log(to)
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
const[error,setError]=useState(false)
  const sendHandler = (event) => {
    event.preventDefault();
    if (message.length === 0) {
        setError(true)
    } else {
        setError(false)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thank you for writing us we will get back to you',
        showConfirmButton: false,
        timer: 7000,
      });
      navigate('/');
    }
  };

  return (
   <>
       <button className={styles.goToHomeButton}onClick={()=>{navigate("/")}}>🏠</button>

     <div className={styles.emailCompose}>
      <h2>Feel Free To Write Us</h2>
      <form>
        <div className={styles.formGroup}>
          <label htmlFor="to">To:</label>
          <input type="email" id="to" name="to" defaultValue={to} readOnly />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            name="message"
            rows="4"
          />
        </div>
        {error && <p style={{color:"red"}}>Please Enter Your Message</p>}
        <button type="submit" onClick={sendHandler}>
          Send
        </button>
      </form>
    </div>
   </>
  
  );
};

export default Contactus;
