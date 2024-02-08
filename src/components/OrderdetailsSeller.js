import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import './login.css'

function OrderdetailsSeller() {
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
    <div className='orderS-main'>
        {Order.map((a)=>{
        return(
          <div className="orderS-flex"> 
          <div>
           <img className="orderS-img" src={a.image+" "} />
           </div> 
          <div className='orderS-details'>
            {a.title+" "}
            </div>
            <div className='orderS-price'>
            {'Rs. '+a.price+" "} 
            </div>
            <div className='orderS-rating'>
              {a.rating.rate+'⭐'}
            </div>
            <div className='orderS-date'>
              <p>Ordered date :<b> 12/01/2012</b></p>
            </div>  
          </div>
        )
      })}

    </div>
  )
}

export default OrderdetailsSeller