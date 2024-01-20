import React from 'react'
import './NavbarAdmin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function NavbarAdmin() {


  return (
    <div>
      
      <nav >
        <ul className='nav-flex'>

          {/* <div>
              <img className="sics-logo" src={logo} alt="BanImg" />
          </div> */}
          <div>
            <h4 className='nav-title'>SICS-kart</h4>
          </div>

          <div>
          <li><a href='#'>HOME</a></li>
          </div>
          <div>
          <li><a href='#'>PENDING</a></li>
          </div>
          <div>
          <li><a href='#'>USERS</a></li>
          </div>
          <div>
          <li><a href='#'>SELLERS</a></li>
          </div>
          <div>
          <li><a href='#'>BANNED</a></li>
          </div>

          <div>
              <form>
               <input className="form-control mr-sm-2 nav-searchbar nav-searchbar" type="search" placeholder="Search" aria-label="Search" />
               </form>
          </div>
          <div>
               <form>
               <button className="nav-search" type="submit">SEARCH→</button>
              </form>
          </div>
          
          <div>
            <button type="button" className="nav-logout">LOGOUT</button>
          </div>
         
        </ul>
      </nav>
      
   </div>   
  )
}

export default NavbarAdmin