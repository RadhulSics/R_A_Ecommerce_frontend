import React from 'react'
import './NavbarHomePage.css'
import { Link, useNavigate } from 'react-router-dom'
import sicsLogo from '../images/sics.png'

function NavbarHomePage() {
  const navigate = useNavigate()
  const login =()=>{
    navigate('/login')
  }
  return (
    <div>
       <nav  className='nav-HomePage' >
          <div>
            {/* <h4 className='nav-title-HomePage'>SICS-kart</h4> */}
            <img className='nav-title-HomePage' src={sicsLogo} alt='logo' />
          </div>

        <ul className='nav-flex-HomePage'>

          <div>
            
          <li className='nav-li-HomePage'><Link className='nav-a-HomePage' to='/' >HOME</Link></li>
          </div>
          <div>
          <li className='nav-li-HomePage'><Link className='nav-a-HomePage' to='/'>About Us</Link></li>
          </div>
          <div>
          <li className='nav-li-HomePage'><Link className='nav-a-HomePage' to='/'>Contact Us</Link></li>
          </div> 
          <div>
            <button type="button" className="nav-login-HomePage" onClick={login}>LOG IN</button>
          </div>

         
        </ul>
      </nav>
    </div>
  )
}

export default NavbarHomePage