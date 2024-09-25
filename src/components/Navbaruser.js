import React from 'react'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import cart from '../images/cart.png'

function Navbaruser() {
  return (
    <div>
        <nav>
            <ul className='nav-position'>
                <div>
                    <li className='navuser-li'><Link className='nav-ahref' to="/User">HOME</Link></li>
                </div>
                <div>
                    <li className='navuser-li'><Link className='nav-ahref' to='/ProfileUser'>PROFILE</Link></li>
                </div>
                <div>
                    <li className='navuser-li'><Link className='nav-ahref' to='/OrderDetailsUSer'>HISTORY</Link></li>
                </div>
                <div>
                  <Link to='/cartUser'><img className='cart-icon' src={cart}/></Link>  
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