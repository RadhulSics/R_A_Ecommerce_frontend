import React from 'react'
import './StyleR.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';

function NavbarAdmin() {

  return (
    <div>
      
      <nav  className='nav-admin' >
         
        <ul className='nav-flex'>

          <div>
            
          <li className='nav-li'><Link className='nav-a' to='/Admin' >HOME</Link></li>
          </div>
          <div>
          <li className='nav-li'><Link className='nav-a' to='/sellerApproval'>PENDING</Link></li>
          </div>
          <div>
          <li className='nav-li'><Link className='nav-a' to='/UserAdmin'>USERS</Link></li>
          </div>
          <div>
          <li className='nav-li'><Link className='nav-a' to='/SellerAdmin'>SELLERS</Link></li>
          </div>
          <div>
          <li className='nav-li'><Link className='nav-a' to='/Ban' >BANNED</Link></li>
          </div>

          
          
          <div>
            <button type="button" className="nav-logout"><Link className='nav-a' to='/'>LOG OUT</Link></button>
          </div>

          <div>
            <button type="button" className="nav-toggle">=</button>
          </div>
        </ul>
      </nav>
      
   </div>   
  )
}

export default NavbarAdmin