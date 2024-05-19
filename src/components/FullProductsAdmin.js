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
    <div >
      
    <div >
   
      {Products.map((a)=>{
        return(
          <div className="card col-2 fullA-col">

          <Link to={`/IndProductsAdmin/${a._id}`} className="row fullA-main">
           <img className="card-img-top fullA-img" src={`http://localhost:3000/${a.image1.filename}`} alt='image' />
           <div className="card-body">
          
            <div className='fullA-name'>
            {a.name+" "}
            </div> 
            <hr/>
            <div className='fullA-price'>
            {'Rs. '+a.price+" "}
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

