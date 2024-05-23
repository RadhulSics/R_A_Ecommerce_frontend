import React, { useEffect, useState } from 'react'
import './UserList.css';
import axios from 'axios'
import { Link } from 'react-router-dom';

function UserList() {

  const [state,setState]=useState([]);

 useEffect(()=>{
  axios.post('http://localhost:3000/allUser')
  .then((res)=>{
    setState(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(state)
  return (
    <div className='UserList-main'>
      <div>
        {state.map((b)=>{
          return(
          <div className='UserList-flex'>
            <div>
           
             <img className='UserList-image' src={`http://localhost:3000/${b.image.filename}`} alt='profile image' />
             </div>
             <div>
              {'Name : '+b.name}
              </div>
              <div>
              {'Email : '+b.email}
              </div>
              <div>
              <label>Reason :</label>
              <select className='UserList-select-reason'>
                <option className='UserList-opt-select'></option>
                <option>spam</option>
                <option>poor product quality</option>
                <option>damaged products</option>
                <option>other</option>
              </select>
              </div>
            
              <div>
                <Link className='UserList-view-button' to='/OrderDetails'>Order detsils</Link>
              </div>
              <div>
              <button className='UserList-banbutton'>BAN</button>
              </div>
              
          </div>
          
          )
        })} 
      </div>
    </div>
  )
}

export default UserList