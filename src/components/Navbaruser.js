import React, { useEffect, useState } from 'react'
import './Navbaruser.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link, useNavigate } from 'react-router-dom';
import cart from '../images/cart.png'

function Navbaruser() {
    const [Data,setData]=useState({search:''})
    const navigate = useNavigate()
    const change=(a)=>{
        const {name,value}=a.target;
        setData(prevData=>({
            ...prevData,
            [name]:value
        }))
        console.log(Data.search);
    }
    const searchFunction=()=>{
        navigate(`/userSearch/${Data.search}`)
    }

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
                    <li className='navuser-li'><Link className='nav-ahref' to='/ProfileUser'>PROFILE</Link></li>
                </div>
                <div>
                    <li className='navuser-li'><Link className='nav-ahref' to='/OrderDetailsUser'>HISTORY</Link></li>
                </div>

                    <form className='search-box'>
                <div >
                    <input type="text" class="search-barnav" placeholder="search..." aria-label="search" name='search' onChange={change} /> 
                    </div>
                <div>
                <button class="btn-search" type="submit" onClick={searchFunction}>SEARCH</button>
                </div>
                </form>
                
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