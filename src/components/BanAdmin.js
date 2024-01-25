import React, { useEffect, useState } from 'react'
import './StyleR.css';
import axios from 'axios'

function BanAdmin() {

  const [Userz,SetUserz]=useState([]);

 useEffect(()=>{
  axios.get('https://api.escuelajs.co/api/v1/users')
  .then((res)=>{
    SetUserz(res.data)
  })
  .catch((err)=>{
    console.log(err)
  })
 },[])
 console.log(Userz)
  return (
    <div className='ban-main'>
      <div>
        {Userz.map((b)=>{
          return(
          <div className='ban-flex'>
            <div>
             <img className='ban-image' src={b.avatar} />
             </div>
             <div>
              {'Name : '+b.name}
              </div>
              <div>
              {'Email : '+b.email}
              </div>
              <div>
              <p>Reason : lorem ipsum</p>
              </div>
              <div>
              <button className='ban-button' >UNBAN</button>
              </div>
              
          </div>
          
          )
        })} 
      </div>
    </div>
  )
}

export default BanAdmin