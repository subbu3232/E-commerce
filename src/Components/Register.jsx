import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Styles from './Register.module.css'
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [error, setError] = useState(false);
  const errormsg = 'PASSWORD NOT MATCHED';
  const [nerror, setNerror] = useState(false);
  const nerrormsg = 'ENTER VALID NUMBER';
  const [show, setShow] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError(false);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
    setNerror(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  const handleRepasswordChange = (e) => {
    setRepassword(e.target.value);
    setError(false);
  };

  const loginhandler = () => {
    if (password !== repassword) {
      setError(true);
      return;
    }

    if (number.length !== 10) {
      setNerror(true);
      return;
    }

    const newuser = {
      name: name,
      phonenumber: number,
      password: password,
    };

    const existing = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existing.some((user) => user.phonenumber === newuser.phonenumber);

    if (userExists) {
      Swal.fire({
        icon: 'error',
        title: 'MOBILE NUMBER ALREADY EXISTS',
        footer: '<a >GO BACK AND LOGIN</a>',
      });
    } else {
      const updated = [...existing, newuser];
      localStorage.setItem('users', JSON.stringify(updated));

      Swal.fire({
        position: 'CENTER',
        icon: 'success',
        title: 'ACCOUNT CREATED SUCCESSFULLY',
        showConfirmButton: false,
        timer: 2700,
      });
      navigate('/login');
      setNumber('');
      setPassword('');
      setRepassword('');
    }
  };

  const showhandler = () => {
    setShow(!show);
  };

  return (
    <div className={Styles.main}>
      <button onClick={() => navigate('/login')}>LOGIN</button>
        <div className={Styles.ipfield}>
        <img src='https://i.ibb.co/F4D2M3j/eazycartloho-removebg-preview.png' alt="Logo"></img>
        <input type='text' placeholder='Enter Your Name' onChange={handleNameChange} />
        <input
          value={number}
          type='number'
          placeholder='Enter Your Mobile Number'
          onChange={handleNumberChange}
        />
          {show ? (
            <input
              value={password}
              type='text'
              placeholder='Enter Password'
              onChange={handlePasswordChange}
            />
          ) : (
            <input
              value={password}
              type='password'
              placeholder='Enter Password'
              onChange={handlePasswordChange}
            />
          )}
        
          <input
            value={repassword}
            type='password'
            placeholder='Re-Enter Password'
            onChange={handleRepasswordChange}
          /> 
        {error && <p>{errormsg}</p>}
        {nerror && <p>{nerrormsg}</p>}
        <button onClick={loginhandler}>SIGN UP</button>
    </div>
    </div>
  );
};

export default Register;
