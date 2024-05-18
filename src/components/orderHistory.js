import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import './OrderHistory.css'

function OrderHistory() {
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
    <div className='orderH-main'>
        <div>
            <input type='text'placeholder='Search your orders here' className='orderH-input'></input>
            <button className="orderH-btn "type='submit'>search</button>
        </div>
        {Order.map((a)=>{
        return(
          <div className="orderH-flex"> 
          <div>
           <img className="orderH-img" src={a.image+" "} />
           </div> 
          <div className='orderH-details'>
            {a.title+" "}
            </div>
            <div className='orderH-price'>
            {'Rs. '+a.price+" "} 
            </div>
            <div className='orderH-rating'>
              {a.rating.rate+'⭐'}
            </div>
            <div className='orderH-date'>
              <p>Delivered date:<b> 12/01/2012</b></p>
            </div>  
          </div>
          
        )
      })}

    </div>
  )
}

export default OrderHistory