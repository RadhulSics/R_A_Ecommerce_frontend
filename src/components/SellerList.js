import React, { useEffect, useState } from 'react'
import './SellerList.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function SellerList() {

  const [state,setState]=useState([]);

 useEffect(()=>{
  axios.post('http://localhost:3000/allSeller')
  .then((res)=>{
    setState(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(state)
  return (
    <div className='SellerList-main'>
      <div>
        {state.map((b)=>{
          return(
          <div className='SellerList-flex'>
            <div>
             
             <img className='SellerList-image' src={`http://localhost:3000/${b.image.filename}`} alt='profile image' />
             </div>
             <div>
              {'Name : '+b.name}
              </div>
              <div>
              {'Email : '+b.email}
              </div>
              <div>
              <label>Reason :</label>
              <select className='SellerList-select-reason'>
                <option className='SellerList-opt-select'></option>
                <option>spam</option>
                <option>poor product quality</option>
                <option>damaged products</option>
                <option>other</option>
              </select>
              </div>
            
              <div>
                <Link className='SellerList-view-button' to='/OrderDetails'>Order detsils</Link>
              </div>
              <div>
              <button className='SellerList-banbutton'>BAN</button>
              </div>
              
          </div>
          
          )
        })} 
      </div>
    </div>
  )
}

export default SellerList