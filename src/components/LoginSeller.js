import React, { useState } from 'react'
import './login.css';
import user_icon from '../images/person.png'
import password_icon from '../images/password.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function LoginSeller() {
  let formIsValid = true;
  const [data,SetData]=useState({email:'',password:''})
  const [errors, setErrors] = useState({ email: '', password: '' });
 


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
      return `${fieldName} is required*`;
  }
  return '';
};
const navigate=useNavigate();

let signin=(a)=>{
  a.preventDefault()

  let errors = {};

  errors.username= validateField('email', data.email);
  errors.password = validateField('password', data.password);

  setErrors(errors);

  if (formIsValid) {
      console.log("data", data);
      axios.post('http://localhost:4030/loginSeller', data)
      .then((rec)=>{
        if(rec.data.data == 'pending'){
        alert('Your registration is still pending ... contact admin')
       }
       else if(rec.data.data == 'ban'){
        alert('You have been banned ... contact admin')
       }
       else if(rec.data.msg == "User not found"){
        alert(rec.data.msg)
       }
       else if(rec.data.msg == "Password mismatch"){
        alert(rec.data.msg)
       }
        else{
        console.log(rec);
        localStorage.setItem('sellerid',rec.data.data._id)
        navigate('/seller')
        }
        
      })
      .catch((err)=>{
        console.log(err)
      })
  }

      
  



  }



  return (
    <div className='main'>
              <form onSubmit={signin}>
          <div  className="login">
          <div className='submain border border-dark'>
            <h1 className='login-title'>LOG IN</h1>
            <h6 className='login-title-h6'>Seller</h6>
            <div className='firstinput'>
              <img src={user_icon} alt="user_icon" className='user' />
              <input type='text' placeholder='email' className='username login-input'   name='email' value={data.email} onChange={change}/>
              {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
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
            <Link to='/ForgotpassSeller'> forgot password?</Link> or<Link to='/RegisterSeller'> Sign up</Link>
            </div>
          </div>
          </div>
      </form>
    
    </div>
  )
}

export default LoginSeller