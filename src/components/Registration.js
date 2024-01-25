import React from 'react'
import './login.css';
import './StyleR.css';

function Registration() {
  return (
    <div>
       <div className='reg-main'>

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

              <input className='reg-input'  type='text' placeholder='Username...' />
              <input className='reg-input reg-number' type='number' placeholder='Phone number...'/>
              <input className='reg-input'  type='email' placeholder='Email...' />
              <input className='reg-input'  type='password' placeholder='Password...' />
              <div>
                <label  className='reg-label'>Male</label>
                <input type='radio' name='gender' />
                <label  className='reg-label'>Female</label>
                <input type='radio' name='gender' />
              </div>

            <div >
              <button className='reg-button' >REGISTER</button>
            </div>
        </div>
      </div>
    </div>
   
  )
}

export default Registration