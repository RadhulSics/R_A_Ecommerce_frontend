import React from 'react'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';

function Navbaruser() {
  return (
    <div>
        <nav>
            <div>
                <h1 className='nav-heading'>SICS-kart</h1>
            </div>
            <ul className='nav-position'>
                <div>
                    <li className='navuser-li'><Link className='nav-ahref' to="/User">HOME</Link></li>
                </div>
                <div>
                    <li className='navuser-li'><Link className='nav-ahref' to='/ProfileUSer'>PROFILE</Link></li>
                </div>
                <div>
                    <li className='navuser-li'><Link className='nav-ahref' to='/OrderDetailsUSer'>HISTORY</Link></li>
                </div>
                <div>
                    <form>
                    <input type="text" class="search-barnav" placeholder="search..." aria-label="search" /> </form></div>
                    <div>
                        <form>

  <button class="btn-search" type="submit">SEARCH</button></form>
  </div>

                <div>
                    <button type='button'className='nav-out'><Link className='nav-a' to='/'>LOG OUT</Link></button>
                </div>
               
                    
                
            </ul>

        










        </nav>





    </div>
  )
}

export default Navbaruser