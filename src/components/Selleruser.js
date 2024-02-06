import React, { useEffect, useState } from 'react'
import './login.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function Selleruser() {

  const [state,setState]=useState([]);

 useEffect(()=>{
  axios.get('https://api.escuelajs.co/api/v1/users')
  .then((res)=>{
    setState(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(state)
  return (
    <div className='selleruser-main'>
      <div>
        {state.map((b)=>{
          return(
          <div className='selleruser-flex'>
            <div>
             <img className='selleruser-image' src={b.avatar} />
             </div>
             <div>
              {'Name : '+b.name}
              </div>
              <div>
              {'Email : '+b.email}
              </div>
              <div>
              <label>Reason :</label>
              <select className='select-reason'>
                <option className='opt-select'></option>
                <option>spam</option>
                <option>poor product quality</option>
                <option>damaged products</option>
                <option>other</option>
              </select>
              </div>
              <div>
                <button className='view-button'>View-profile</button>
              </div>
              <div>
                <Link className='view-button' to='/OrderDetails'>Order detsils</Link>
              </div>
              <div>
              <button className='selleruser-banbutton'>BAN</button>
              </div>
              
          </div>
          
          )
        })} 
      </div>
    </div>
  )
}

export default Selleruser