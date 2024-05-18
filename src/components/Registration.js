import React, { useState } from 'react'
import './login.css';
import './Registration.css';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Registration() {

  const [data,SetData]=useState({name:'',email:'',number:'',password:''})
  const [userType, setUserType] = useState('user');
  
  const change=(b)=>{
    setUserType(b.target.value);
    SetData({...data,[b.target.name]:b.target.value})
    console.log(data);
  }

  let signup=(a)=>{
    a.preventDefault()
  
      console.log("data", data);

      if(userType === 'user'){
        axios.post('http://localhost:3000/newuser',data)
        .then((rec)=>{
          console.log(rec);
        })
        .catch((err)=>{
          console.log(err)
        })
      }
      else if(userType === 'seller'){
        axios.post('http://localhost:3000/newseller',data)
        .then((rec)=>{
          console.log(rec);
        })
        .catch((err)=>{
          console.log(err)
        })
  }
       else{
        alert('Please select account type')
       }
    }
  return (
    <div className='reg-main-bg'>
    <div className='reg-main'>
       <form onSubmit={signup} >

       <div className='row reg-oldUser'>
        <p className='col-9 reg-loginText'>Already have an account?</p>
        <button className='col-3 reg-login'><Link className='Link-decoration' to='/'>LOG IN</Link></button>
       </div>
       
        <div className='reg-submain'>
            <h2 className='reg-title'>SIGN UP</h2>
              <div>
                <label className='reg-label'>User</label>
              <input type='radio'  name='usertype' value={'user'}  checked={userType === 'user'} onChange={change}/>
                <label  className='reg-label'>Seller</label>
                <input type='radio' name='usertype' value={"seller"}  checked={userType === 'seller'} onChange={change} />
              </div>

              <input className='reg-input'  type='text' placeholder='Username...' value={data.name} name='name' onChange={change}/>
         
      
              <input className='reg-input reg-number' type='number' placeholder='Phone number...' value={data.number} name='number' onChange={change}/>
          
              <input className='reg-input'  type='email' placeholder='Email...'  value={data.email} name='email' onChange={change}/>
          
              <input className='reg-input'  type='password' placeholder='Password...'value={data.password} name='password' onChange={change}/>
         
              <div>
                <label  className='reg-label'>Male</label>
                <input type='radio' name='gender' value={'male'}/>
                <label  className='reg-label'>Female</label>
                <input type='radio' name='gender' value={'female'} />
              </div>

            <div >
              <button type='submit' className='reg-button' >REGISTER</button>
            </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Registration