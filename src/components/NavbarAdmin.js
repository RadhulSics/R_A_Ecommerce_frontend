import React from 'react'
import './StyleR.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from 'react-router-dom';

function NavbarAdmin() {

  return (
    <div>
      
      <nav  className='nav-admin' >
          <div>
            <h4 className='nav-title'>SICS-kart</h4>
          </div>

        <ul className='nav-flex'>

          <div>
            
          <li className='nav-li'><Link className='nav-a' to='/Admin' >HOME</Link></li>
          </div>
          <div>
          <li className='nav-li'><Link className='nav-a' to='/ProdApproval'>PENDING</Link></li>
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
              <form>
               <input className="form-control mr-sm-2 nav-searchbar nav-searchbar" type="search" placeholder="Search . . ." aria-label="Search" />
               </form>
          </div>
          <div>
               <form>
               <button className="nav-search" type="submit">SEARCH→</button>
              </form>
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