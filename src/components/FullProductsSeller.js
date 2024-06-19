import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './FullProductsSeller.css';
import { Link } from 'react-router-dom';

function FullProductsSeller() {

  const [Products,SetProducts]=useState([]);

  useEffect(()=>{
    axios.post('http://localhost:3000/viewproducts')
    .then((res)=>{
     console.log('successful');
     console.log(res);
     SetProducts(res.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  
console.log(Products)
  return (
    <div className='fullS-bg'>
      
    <div >
    
        <div className='row fullS-main'>
            {Products.map((c)=>{
                return(
                    <div className="card col-2 fullS-col">
             <Link to={`/IndProductsSeller/${c._id}`} className='Link-decoration' >
           <img className="card-img-top fullS-img" src={`http://localhost:3000/${c.image1.filename}`} alt='image' />
           <div className="card-body">
            <div className='fullS-name'>
    
            {c.name+" "}
            <div className='fullS-price'>
            {'Rs. '+c.price+" "}
            </div> 
            </div> 
  
            
           
            </div> 
            </Link>
          </div>
                )

            })}
        </div>
        
    </div>
   
    </div>
   
  )
}

export default FullProductsSeller

