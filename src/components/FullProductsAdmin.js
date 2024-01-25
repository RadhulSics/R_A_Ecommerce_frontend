import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './StyleR.css';

function FullProductsAdmin() {

  const [Products,SetProducts]=useState([]);

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((rec)=>{
      SetProducts(rec.data)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
console.log(Products)
  return (
    <div >
    <div className="row fullA-main">
      {Products.map((a)=>{
        return(
          <div className="card col-2 fullA-col">
           <img className="card-img-top fullA-img" src={a.image+" "} />
           <div className="card-body">
          
            <div className='fullA-name'>
            {a.title+" "}
            </div> 
            <hr/>
            <div className='fullA-price'>
            {'Rs. '+a.price+" "}
            </div> 
            </div> 
          </div>
        )
      })}
    </div>
    </div>
   
  )
}

export default FullProductsAdmin

