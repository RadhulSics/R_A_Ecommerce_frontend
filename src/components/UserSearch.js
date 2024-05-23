import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './UserSearch.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link, useParams } from 'react-router-dom';

function FullproductsUser() {
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
    <div className='userSearch-bg'>
        
        <div className='row userSearch-main'>
            {state.map((c)=>{
                return(
                 
            <div className="card col-2 userSearch-col">
               <Link to={`/IndProductsUser/${c._id}`} className='Link-decoration' >
           <img className="card-img-top userSearch-img" src={`http://localhost:3000/${c.image1.filename}`} alt='image' />
           
           <div className="card-body">
            
            <div className='userSearch-name'>
            <hr/>
            {c.name+" "}
            <div className='userSearch-price'>
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

export default FullproductsUser