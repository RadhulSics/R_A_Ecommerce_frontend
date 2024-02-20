import React from 'react'
import './login.css';
import user_icon from '../images/person.png'
import password_icon from '../images/password.png'

function Login() {
  return (
    <body>
      <div className='main'>
        <div className='submain'>
          <div class className="login">
            <h1 className='login-title'>LOG IN</h1>
            <div className='firstinput'>
              <img src={user_icon} alt="user_icon" className='user' />
              <input type='text' placeholder='username' className='username login-input' />
            </div>
            <div className='secondinput'>
              <img src={password_icon} alt="password_icon" className='pass' />
              <input type='password' placeholder='password' className='password login-input' />
            </div>
            <div className='login-button'>
              <button className='buttons' type='submit'>login</button>
            </div>
            <div className='forgotlink'>
              <a className='a-tag' href='#'>forgot password? </a>or<a href='#'> Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Login