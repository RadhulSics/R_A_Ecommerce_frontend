import React,{ useEffect,useState } from 'react'
import axios from 'axios'
import './CartUser.css'

function CartUser() {
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
    <div className='cart-main'>
        {Order.map((a)=>{
        return(
          <div className="cart-flex"> 
          <div>
           <img className="cart-img" src={a.image+" "} />
           </div> 
          <div className='cart-details'>
            {a.title+" "}
            </div>
            <div className='cart-price'>
            {'Rs. '+a.price+" "} 
            </div>
            <div className='cart-rating'>
              {a.rating.rate+'⭐'}
            </div>
            <div>
             <button  className='cart-btn'>Remove</button>
            </div> 
             
          </div>
          
        )
      })}
      <div className='cart-final-details row'>
        <div className='col-4'>
          <h5>Total items : 6</h5>
          {/* <hr style={{width:'11rem'}}/> */}
          <h5>Total price : <b>6023 </b>rs</h5>
        </div>
        <div className='col-2'>
          <button  className='cart-buy-btn'>BUY</button>
        </div> 
      </div>
      
    </div>
  )
}

export default CartUser