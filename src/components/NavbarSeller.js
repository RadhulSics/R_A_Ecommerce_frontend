import React from 'react'
import './NavbarSeller.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';
import sicsLogo from '../images/sics.png'
function NavbarSeller() {
  return (
    <div>
      
    <nav  className='nav-Seller' >
      

      <ul className='navS-flex'>
      <div>
          {/* <h4 className='navS-title'>SICS-kart</h4> */}
          <img className='nav-heading-sics1' src={sicsLogo} alt='logo' />
        </div>
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
            <form>
             <input className="form-control mr-sm-2  navS-searchbar" type="search" placeholder="Search . . ." aria-label="Search" />
             </form>
        </div>
        <div>
             <form>
             <button className="navS-search" type="submit">SEARCH→</button>
            </form>
        </div>
        
        <div>
          <button type="button" className="navS-logout"><Link className='nav-a' to='/'>LOG OUT</Link></button>
        </div>

        <div>
          <button type="button" className="navS-toggle">=</button>
        </div>
      </ul>
    </nav>
    
 </div>  
  )
}

export default NavbarSeller