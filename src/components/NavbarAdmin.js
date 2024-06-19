import React, { useState } from 'react'
import './NavbarAdmin.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from 'react-router-dom';
import sicsLogo from '../images/sics.png'
function NavbarAdmin() {

  
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
        if(Data.search){
            navigate(`/adminSearch/${Data.search}`) 
        }
        else{
          alert('Please enter an input...')
        }
       
    }

  return (
    <div>
      
      <nav  className='nav-admin' >
         

        <ul className='nav-flex'>
        <div>
            {/* <h4 className='nav-title'>SICS-kart</h4> */}
            <img className='nav-heading-sics2' src={sicsLogo} alt='logo' />
          </div>
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
              <form>
               <input className="form-control mr-sm-2 nav-searchbar nav-searchbar" type="search" placeholder="Search . . ." aria-label="Search" name='search'  onChange={change}/>
               </form>
          </div>
          <div>
               <form>
               <button className="nav-search" type="submit" onClick={searchFunction}>SEARCH→</button>
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