import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbarhomepage.css'

function NavbarHomepage() {
    const navigate = useNavigate()
    const login =()=>{
      navigate('/login')
    }
  return (
    <div>
        <nav  className='nav-HomePage'>
            <ul className='nav-flex-HomePage'>
            <div>
            <li className='nav-li-HomePage'><Link className='nav-a-HomePage' to='/' >Home</Link></li>
            </div>
            <div>
          <li className='nav-li-HomePage'><Link className='nav-a-HomePage' to='/about'>About Us</Link></li>
          </div>
          <div>
          <li className='nav-li-HomePage'><Link className='nav-a-HomePage' to='/contact'>Contact Us</Link></li>
          </div> 
          <div>
          <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle  nav-login-HomePage" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    LOG IN
  </button>
  <ul class="dropdown-menu">
    <li><Link class="dropdown-item" to="/Sellerlogin">Seller</Link></li>
    <li><Link  class="dropdown-item" to='/Customerlogin'>Customer</Link></li>
  </ul>
</div>
          </div>



            </ul>





        </nav>








    </div>
  )
}

export default NavbarHomepage