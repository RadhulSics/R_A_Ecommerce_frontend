import React from 'react'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Navbaruser() {
  return (
    <div>
        <nav>
            <div>
                <h1 className='nav-heading'>SICS-kart</h1>
            </div>
            <ul className='nav-position'>
                <div>
                    <li><a className='nav-ahref' href='#'>HOME</a></li>
                </div>
                <div>
                    <li><a className='nav-ahref' href='#'>PROFILE</a></li>
                </div>
                <div>
                    <li><a className='nav-ahref'href='#'>HISTORY</a></li>
                </div>
                <div>
                    <form>
                    <input type="text" class="search-barnav" placeholder="search..." aria-label="search" /> </form></div>
                    <div>
                        <form>

  <button class="btn-search" type="submit">SEARCH</button></form>
  </div>

                <div>
                    <button type='button'className='nav-out'>LOGOUT</button>
                </div>
               
                    
                
            </ul>

        










        </nav>





    </div>
  )
}

export default Navbaruser