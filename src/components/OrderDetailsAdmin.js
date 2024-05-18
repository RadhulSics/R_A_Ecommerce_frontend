import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import './OrderDetailsAdmin.css'

function OrderDetailsAdmin() {

const [Order,SetOrder] = useState([])

useEffect(()=>{
  axios.get('https://fakestoreapi.com/products')
  .then((rec)=>{
    SetOrder(rec.data)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

console.log(Order)

  return (
    <Link to='/OrderDetails' className="orderD-main">
      {Order.map((a)=>{
        return(
          <div className="orderD-flex"> 
          <div>
           <img className="orderD-img" src={a.image+" "} />
           </div> 
          <div className='orderD-details'>
            {a.title+" "}
            </div>
            <div className='orderD-price'>
            {'Rs. '+a.price+" "} 
            </div>
            <div className='orderD-rating'>
              {a.rating.rate+'⭐'}
            </div>
            <div className='orderD-date'>
              <p>Purchased date :<b> 12/01/2012</b></p>
            </div>  
          </div>
        )
      })}
       </Link>
  )
}

export default OrderDetailsAdmin