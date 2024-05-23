import React, { useState } from 'react'
import './login.css';
import user_icon from '../images/person.png'
import password_icon from '../images/password.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
function Login() {
  
  const [data,SetData]=useState({email:'',password:''})
  const [errors, setErrors] = useState({email:'', password: '' });
  const [loginType, setloginType] = useState('user');


const change=(b)=>{
  const { name, value } = b.target;
  setloginType(b.target.value);
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
const navigate=useNavigate()


let signin=(a)=>{
  a.preventDefault()

  let errors = {};
  let formIsValid = true;

  errors.email= validateField('email', data.email);
  errors.password = validateField('password', data.password);

  setErrors(errors);

  if (formIsValid) {
      console.log("data", data);
      if(loginType === 'user'){
        axios.post('http://localhost:3000/userLogin',data)
        .then((rec)=>{
          console.log(rec);
          localStorage.setItem('uid',rec.data.data._id)
          navigate('/user')
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      else if(loginType === 'seller'){
        axios.post('http://localhost:3000/sellerLogin',data)
        .then((rec)=>{
          console.log(rec);
          localStorage.setItem('sid',rec.data.data._id)
          navigate('/seller')
        })
        .catch((err)=>{
          console.log(err)
        })
  }
    else if(data.email === 'admin' && data.password ==='admin'){
      navigate('/admin')
  }
       else{
        alert('Please select account type')
       }
    }
  }


  return (
   <div className='login-main-bg'>
      <form onSubmit={signin} className='main'>
        <div className='submain'>
          <div class className="login">
            <p className='login-title'>LOG IN</p>

           

            <div className='firstinput'>
              <img src={user_icon} alt="user_icon" className='user' />
              <input type='text' placeholder='Email' className='username login-input'   name='email' value={data.email} onChange={change}/>
              {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
            </div>
            <div className='secondinput'>
              <img src={password_icon} alt="password_icon" className='pass' />
              <input type='password' placeholder='Password' className='password login-input'  name='password' value={data.password} onChange={change} /> {errors.password && (
                <div className="text-danger input-validation">{errors.password}</div>
              )}
            </div>
            <div>
                <label className='login-label'>User</label>
              <input type='radio'  name='logintype' value={'user'}  checked={loginType === 'user'} onChange={change}/>
                <label  className='login-label'>Seller</label>
                <input type='radio' name='logintype' value={"seller"}  checked={loginType === 'seller'} onChange={change} />
              </div>
            <div className='login-button'>
              <button type='submit' className='buttons'>login</button>
            </div>
            <div className='forgotlink'>
              <a className='a-tag' href='#'>forgot password? </a>or<Link to='/Register' className='a-tag'> Sign up</Link>
            </div>
          </div>
        </div>
      </form>
      </div>
  )
}

export default Login