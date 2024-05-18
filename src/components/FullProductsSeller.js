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
    <div >
      
    <div >
    <Link to='/IndProductsSeller' className='Link-decoration' >
        <div className='row fullU-main'>
            {Products.map((c)=>{
                return(
                    <div className="card col-2 fullU-col">
           <img className="card-img-top fullU-img" src={`http://localhost:3000/${c.image.filename}`} alt='image' />
           <div className="card-body">
            <div className='fullU-name'>
            {c.name+" "}
            </div> 
            <hr/>
            <div className='fullU-price'>
            {'Rs. '+c.price+" "}
            </div> 
           
            </div> 
          </div>
                )

            })}
        </div>
        </Link>
    </div>
   
    </div>
   
  )
}

export default FullProductsSeller

