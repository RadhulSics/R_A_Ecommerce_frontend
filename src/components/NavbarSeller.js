import React from 'react'
import './StyleR.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';

function NavbarSeller() {
  return (
    <div>
      
    <nav  className='nav-Seller' >

      <ul className='navS-flex'>

        <div>
        <li className='navS-li'><Link  className='navS-a' to='/Seller'>HOME</Link></li>
        </div>
        <div>
        <li className='navS-li'><Link className='navS-a' to='/OwnprodSeller'>OWN PRODUCTS</Link></li>
        </div>
        <div>
        <li className='navS-li'><Link className='navS-a' to='/OrderDetailsSeller'>ORDER DETAILS</Link></li>
        </div>
        <div>
        <li className='navS-li'><Link className='navS-a' to='/ProfileSeller'>PROFILE</Link></li>
        </div>
        <div>
        <li className='navS-li'><Link className='navS-a' to='/NewprodSeller'>NEW PRODUCT</Link></li>
        </div>
        
        <div>
        </div>

        
        <div>
          <button type="button" className="navS-logout"><Link className='nav-a' to='/'>LOG OUT</Link></button>
        </div>
        
      </ul>
    </nav>
    
 </div>  
  )
}

export default NavbarSeller