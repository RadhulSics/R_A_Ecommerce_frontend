import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';



function ForgotpassSeller() {

  const navigate=useNavigate()
  const [data,SetData]=useState({email:'',password:'',confirmpassword:''})
const [errors, setErrors] = useState({ email: '', password: '',confirmpassword:'' });
let formIsValid;

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
  formIsValid=false
    return `${fieldName} is required*`;
}
return '';
};


let signin=(a)=>{
a.preventDefault()
let errors = {};
let formIsValid = true;

errors.email= validateField('email', data.email);
errors.password = validateField('password', data.password);

setErrors(errors);


if(data.password !==data.confirmpassword){
formIsValid=false
setErrors(prevErrors => ({
  ...prevErrors,
  confirmpassword: 'password and confirmpassword should be same*'
}));

}
if (formIsValid) {
  console.log("data", data);
  axios.post(`http://localhost:4030/forgotpwdseller`,data)
  .then((res)=>{
    console.log(res)
    if(res.data.status==200){
        alert('password updated')
        navigate("/Sellerlogin")
       }
       else if(res.data.status==500){
        alert("seller not found")
       }
   })
   .catch((error)=>{
    console.log(error)
   })
  }
}
  
  
  return (
    <div className='forgot-main '>
       <form onSubmit={signin}>
      <div className='forgot-sub'>
        <div>
          <h2 className='forgot-head'>Reset Password</h2>
        </div>
        <div className='row'>
        <div className='forgot-submain col-8'>
        <div>
          <label  className='forgot-label'>E-mail</label>
          <input className=' form-control forgot-input' name='email' value={data.email} onChange={change}   type='email' placeholder='Email'/>
          {errors.email && (
                <div className="text-danger input-validation">{errors.email}</div>
              )}
        </div>
        <div>
          <label className='forgot-label'>New Password</label>
          <input className=' form-control forgot-input' name='password' value={data.password} onChange={change} type='password' placeholder='New Password'/>
          {errors.password && (
                <div className="text-danger input-validation">{errors.password}</div>
              )}
        </div>
        <div>
          <label className='forgot-label'>Confirm Password</label>
          <input className=' form-control forgot-input' name='confirmpassword'value={data.confirmpassword} onChange={change}  type='password' placeholder=' Re-enter Password'/>
          {errors.confirmpassword && (
                <div className="text-danger input-validation">{errors.confirmpassword}</div>
              )}
        </div>
       
        <div>
          <button className='forgot-btn' type='submit'>Reset password </button>
          
        </div>
        </div>
        </div>
        </div>
      </form>





    </div>
  )
}

export default ForgotpassSeller