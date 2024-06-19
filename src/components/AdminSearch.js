import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios'
import './AdminSearch.css'

function AdminSearch() {
  const [state,setState]=useState([]);
  const data = useParams()
  console.log("2nd ",data);
 
  useEffect(()=>{
      axios.post(`http://localhost:3000/userSearch/${data.data}`)
      .then((res)=>{
       console.log('successful');
       console.log(res);
       setState(res.data)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])
  console.log(state)

  return (
    <div className='AdminSearch-bg'>
        
        <div className='row AdminSearch-main'>
            {state.map((c)=>{
                return(
                 
            <div className="card col-2 AdminSearch-col">
               <Link to={`/IndProductsAdmin/${c._id}`} className='Link-decoration' >
           <img className="card-img-top AdminSearch-img" src={`http://localhost:3000/${c.image1.filename}`} alt='image' />
           
           <div className="card-body">
            
            <div className='AdminSearch-name'>
            <hr/>
            {c.name+" "}
            <div className='AdminSearch-price'>
            <b>{'Rs : '+c.price+" "}</b>
            </div> 
            </div> 
           
            
            </div> 
            </Link>
          </div>
          
                )

            })}
        </div>
      
    </div>
  )
}
export default AdminSearch