import React, { useState } from 'react'
import './login.css';
import user_icon from '../images/person.png'
import password_icon from '../images/password.png'
import { Link } from 'react-router-dom';

function Login() {
  
  const [data,SetData]=useState({username:'',password:''})
  const [errors, setErrors] = useState({ username: '', password: '' });


const change=(b)=>{
  const { name, value } = b.target;
  SetData(prevData => ({
      ...prevData,
      [name]: value
  }));
  setErrors(prevErrors => ({
    ...prevErrors,
    [name]: ''
}));
}
const validateField = (fieldName, value) => {
  if (!value.trim()) {
      return `${fieldName} is required`;
  }
  return '';
};


let signin=(a)=>{
  a.preventDefault()

  let errors = {};
  let formIsValid = true;

  errors.username= validateField('username', data.username);
  errors.password = validateField('password', data.password);

  setErrors(errors);

  if (formIsValid) {
      console.log("data", data);
  }
}

  return (
   
      <form onSubmit={signin} className='main'>
        <div className='submain'>
          <div class className="login">
            <h1 className='login-title'>LOG IN</h1>
            <div className='firstinput'>
              <img src={user_icon} alt="user_icon" className='user' />
              <input type='text' placeholder='username' className='username login-input'   name='username' value={data.username} onChange={change}/>
              {errors.username && (
                <div className="text-danger input-validation">{errors.username}</div>
              )}
            </div>
            <div className='secondinput'>
              <img src={password_icon} alt="password_icon" className='pass' />
              <input type='password' placeholder='password' className='password login-input'  name='password' value={data.password} onChange={change} /> {errors.password && (
                <div className="text-danger input-validation">{errors.password}</div>
              )}
            </div>
            <div className='login-button'>
              <button type='submit' className='buttons'>login</button>
            </div>
            <div className='forgotlink'>
              <a className='a-tag' href='#'>forgot password? </a>or<Link to='/Register'> Sign up</Link>
            </div>
          </div>
        </div>
      </form>
  )
}

export default Login