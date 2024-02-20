import React, { useState } from 'react'
import './login.css';
import './StyleR.css';

function Registration() {

  const [data,SetData]=useState({username:'',email:'',number:'',password:''})
  const [errors, setErrors] = useState({username:'',email:'',number:'',password:''});
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
    const validateNumber =(fieldName,value)=>{

      if (!value.trim()) {
        return `${fieldName} is required`;
    }
  
      else if(value.toString().length!==10){
        return `${fieldName}  10 digits required`;
   }
    }
    const validatePassword =(fieldName,value)=>{
      var erorrsPassword=[]
       if (!value.trim()) {
         erorrsPassword.push(`${fieldName} is required and include any`);
     }
     
        if(value.search(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:\-]/) < 0){
         erorrsPassword.push(`special character ,`);
     }
     
        if (value.length < 7) {
         erorrsPassword.push(`length minimum 8 ,`);
       }
        if (value.search(/[a-z]/) < 0) {
         erorrsPassword.push(`one small letter ,`);
       }
       if (value.search(/[A-Z]/) < 0) {
       erorrsPassword.push(`one capital letter ,`);
       }
       if (value.search(/[0-9]/) < 0) {
         erorrsPassword.push(`and any number.`);
       }
       if (erorrsPassword.length > 0) {
         return `${erorrsPassword.join("\n")}`;
     }
     return true;
     }
     
  
  let signup=(a)=>{
    a.preventDefault()
    let errors = {};
      let formIsValid = true;

     
      errors.username= validateField('username', data.username);
      errors.email= validateField('email', data.email);
      errors.number= validateNumber('number', data.number);
      errors.password = validatePassword('password', data.password);


      setErrors(errors);

      if (formIsValid) {
          console.log("data", data);
      }
    }
  return (
    <div>
       <form onSubmit={signup} className='reg-main'>

       <div className='row reg-oldUser'>
        <p className='col-9 reg-loginText'>Already have an account?</p>
        <button className='col-3 reg-login'>LOG IN</button>
       </div>
       
        <div className='reg-submain'>
            <h2 className='reg-title'>SIGN UP</h2>
              <div>
                <label className='reg-label'>Buyer</label>
                <input type='radio' name='usertype' />
                <label  className='reg-label'>Seller</label>
                <input type='radio' name='usertype' />
              </div>

              <input className='reg-input'  type='text' placeholder='Username...' value={data.username} name='username' onChange={change}/>
          {errors.username&& (
                <div className="text-danger signupWorkshop-validation">{errors.username}</div>
              )}
      
              <input className='reg-input reg-number' type='number' placeholder='Phone number...' value={data.number} name='number' onChange={change}/>
          {errors.number && (
                <div className="text-danger signupWorkshop-validation">{errors.number}</div>
              )}
              <input className='reg-input'  type='email' placeholder='Email...'  value={data.email} name='email' onChange={change}/>
          {errors.email && (
                <div className="text-danger signupWorkshop-validation">{errors.email}</div>
              )}
              <input className='reg-input'  type='password' placeholder='Password...'value={data.password} name='password' onChange={change}/>
          {errors.password && (
                <div className="text-danger signupWorkshop-validation">{errors.password}</div>
              )}
              <div>
                <label  className='reg-label'>Male</label>
                <input type='radio' name='gender' />
                <label  className='reg-label'>Female</label>
                <input type='radio' name='gender' />
              </div>

            <div >
              <button type='submit' className='reg-button' >REGISTER</button>
            </div>
        </div>
      </form>
    </div>
   
  )
}

export default Registration