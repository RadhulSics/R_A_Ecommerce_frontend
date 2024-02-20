import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './StyleR.css';
import { Link } from 'react-router-dom';

function FullProductsSeller() {

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
      
    <div >
    <Link to='/IndproductsSeller' className="row fullS-main">
      {Products.map((a)=>{
        return(
          <div className="card col-2 fullS-col">
           <img className="card-img-top fullS-img" src={a.image+" "} />
           <div className="card-body">
          
            <div className='fullS-name'>
            {a.title+" "}
            </div> 
            <hr/>
            <div className='fullS-price'>
            {'Rs. '+a.price+" "}
            </div> 
            </div> 
          </div>
        )
      })}
       </Link>
    </div>
   
    </div>
   
  )
}

export default FullProductsSeller

