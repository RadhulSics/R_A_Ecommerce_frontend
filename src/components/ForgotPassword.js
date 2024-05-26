import React, { useState } from 'react'
import './ForgotPassword.css'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [data,SetData]=useState({email:'',password:''})
 
  const [loginType, setloginType] = useState('user');

  const navigate = useNavigate()

const change=(b)=>{
  const { name, value } = b.target;
  setloginType(b.target.value);
  SetData(prevData => ({
      ...prevData,
      [name]: value
  }));

}
console.log("data : ",data);

const submit =(a)=>{
  a.preventDefault()
  if(loginType ==='user') {
    axios.post(`http://localhost:3000/resetPasswordUser`,data)
  .then((rec)=>{
    if(rec.data == 'User doesnt exist'){
      alert(rec.data);
    }
    else{
      alert(rec.data.msg);
      navigate('/')
    }
  })
  .catch((err)=>{
    console.log(err);
  })}
  else if(loginType==='seller'){
    axios.post(`http://localhost:3000/resetPasswordSeller`,data)
  .then((rec)=>{
    if(rec.data == 'Seller doesnt exist'){
      alert(rec.data);
    }
    else{
      alert(rec.data.msg);
      navigate('/')
    }
  })
  .catch((err)=>{
    console.log(err);
  })
  }
  else{
    alert('select an account type')
  }
}

  return (
    <div className='ForgotPassword-main-bg'>
    <form className='ForgotPassword-main' onSubmit={submit}>
      <div className='ForgotPassword-submain'>
      <button className='col-3 ForgotPassword-login'><Link className='Link-decoration' to='/login'>Go back</Link></button>
        <div class className="login">
          <p className='ForgotPassword-title'>RESET PASSWORD</p>

         

          <div className='firstinput'>
           
            <input type='text' placeholder='Email' className='ForgotPassword-username ForgotPassword-input'   name='email' value={data.email} onChange={change}/>

           
          </div>
          <div className='ForgotPassword-secondinput'>
           
            <input type='password' placeholder='New Password' className='ForgotPassword-password ForgotPassword-input'  name='password' value={data.password} onChange={change} />
          </div>
          <div>
              <label className='ForgotPassword-label'>User</label>
            <input type='radio'  name='logintype' value={'user'}  checked={loginType === 'user'} onChange={change}/>
              <label  className='ForgotPassword-label'>Seller</label>
              <input type='radio' name='logintype' value={"seller"}  checked={loginType === 'seller'} onChange={change} />
            </div>
          <div className='ForgotPassword-button'>
            <button type='submit' className='buttons'>Submit</button>
          </div>
         
        </div>
      </div>
    </form>
    </div>
  )
}

export default ForgotPassword