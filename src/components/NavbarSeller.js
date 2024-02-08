import React from 'react'
import './StyleR.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';

function NavbarSeller() {
  return (
    <div>
      
    <nav  className='nav-Seller' >
        <div>
          <h4 className='navS-title'>SICS-kart</h4>
        </div>

      <ul className='navS-flex'>

        <div>
        <li className='navS-li'><a className='navS-a' href='#'>HOME</a></li>
        </div>
        <div>
        <li className='navS-li'><a className='navS-a' href='#'>OWN PRODUCTS</a></li>
        </div>
        <div>
        <li className='navS-li'><a className='navS-a' href='#'>ORDER DETAILS</a></li>
        </div>
        <div>
        <li className='navS-li'><a className='navS-a' href='#'>PROFILE</a></li>
        </div>
        <div>
        <li className='navS-li'><a className='navS-a' href='#'>NEW PRODUCT</a></li>
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
          <button type="button" className="navS-logout">LOGOUT</button>
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