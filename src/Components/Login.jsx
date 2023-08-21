
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { LoginContext } from "../Conntexts/LoginContext";
import Styles from './Login.module.css'
const Login = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const lsusers = JSON.parse(localStorage.getItem("users"));
  const [error, setError] = useState("");
  const { LoginHandler } = useContext(LoginContext);
  const [show, setShow] = useState(false);

  const showHandler = () => {
    setShow(!show);
  };

  const loginhandler = () => {
    const user = lsusers.find((user) => user.phonenumber === number && user.password === password);
    if (user) {
      Swal.fire({
        position: 'CENTER',
        icon: 'success',
        title: 'LOGIN SUCCESS',
        showConfirmButton: false,
        timer: 3500
      });
      setNumber('');
      setPassword("");
      LoginHandler(user.name, user.number);
      navigate("/");
    } else if (number.length === 0 || password.length === 0) {
      setError("Fields Should Not Be Empty");
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'PHONE NUMBER AND PASSWORD IS NOT MATCHING',
        footer: 'Dont Have An Account,SignUp Now</a>'
      });
      setError("");
    }
  };

  const navigate = useNavigate();

  return (
    <>
    <div >
      <button onClick={() => { navigate("/") }}>🏠</button>
      <div>
        <div className={Styles.logo}>
        <img src='https://i.ibb.co/F4D2M3j/eazycartloho-removebg-preview.png' alt="Logo"></img>

        </div>
        <div className={Styles.ipfield}>
        <input  className={Styles.ip}type="number" value={number} placeholder="Enter Your Mobile Number" onChange={(e) => { setNumber(e.target.value) }} />
        <div>
          {show ? <input  className={Styles.ip} type="text" value={password} placeholder="Enter Your Password" onChange={(e) => { setPassword(e.target.value) }} /> :
            <input  className={Styles.ip} type="password" value={password} placeholder="Enter Your Password" onChange={(e) => { setPassword(e.target.value) }} />}
          <div className={Styles.label}>{show ? <label onClick={showHandler}>Hide</label> : <label onClick={showHandler}>View</label>}</div>
        </div>
        <div className={Styles.btns}>
      <button onClick={loginhandler}>Login</button>
        <p style={{ color: "red" }}>{error}</p>
        <p>Don't Have An Account? <button onClick={() => { navigate("/register") }}>Signup Now</button></p>
      </div>
        </div>
       
       
      </div>
     
    </div>
    
    </>
  );
};

export default Login;
