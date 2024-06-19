import React, { useState } from 'react'
import './NavbarSeller.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useNavigate } from 'react-router-dom';
import sicsLogo from '../images/sics.png'
function NavbarSeller() {

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
            navigate(`/sellerSearch/${Data.search}`) 
        }
        else{
          alert('Please enter an input...')
        }
       
    }

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
        {/* <div>
        <li className='navS-li'><Link className='navS-a' to='/OwnprodSeller'>OWN PRODUCTS</Link></li>
        </div> */}
        {/* <div>
        <li className='navS-li'><Link className='navS-a' to='/OrderDetailsSeller'>ORDER DETAILS</Link></li>
        </div> */}
        
        <div>
        <li className='navS-li'><Link className='navS-a' to='/NewprodSeller'>NEW PRODUCT</Link></li>
        </div>
        <div>
        <li className='navS-li'><Link className='navS-a' to='/ProfileSeller'>PROFILE</Link></li>
        </div>
        
        <div>
        </div>

        <div>
            <form>
             <input className="form-control mr-sm-2  navS-searchbar" type="search" placeholder="Search . . ." aria-label="Search"  name='search'  onChange={change} />
             </form>
        </div>
        <div>
             <form>
             <button className="navS-search" type="submit"  onClick={searchFunction}>SEARCH→</button>
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