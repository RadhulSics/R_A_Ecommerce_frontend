import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './FullProductsAdmin.css';
import { Link } from 'react-router-dom';

function FullProductsAdmin() {

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
    <div className='fullA-bg' >
        
    <div className='row fullA-main'>
        {Products.map((c)=>{
            return(
             
        <div className="card col-2 fullA-col">
           <Link to={`/IndProductsAdmin/${c._id}`} className='Link-decoration' >
       <img className="card-img-top fullA-img" src={`http://localhost:3000/${c.image1.filename}`} alt='image' />
       
       <div className="card-body">
        
        <div className='fullA-name'>
        <hr/>
        {c.name+" "}
        <div className='fullA-price'>
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

export default FullProductsAdmin

