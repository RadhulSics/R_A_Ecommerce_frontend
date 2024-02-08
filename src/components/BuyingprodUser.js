import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BuyingprodUser() {
  const[Product,setProduct]=useState({});
  const {id}=useParams()

  useEffect(()=>{
  axios.get(`https://fakestoreapi.com/products/2`)
  .then((rec)=>{
    setProduct(rec.data)
  })
  .catch((err)=>{
    console.log(err)
  })
  })

  return (
    <div>
      <div className='buying-main'>
         <img className='buying-img' src={Product.image} alt="Card image cap" />
         {Product.title}
         <b>{' '+Product.price}</b>
    </div>
    <div className='buying-main'>
      <p>NEW ADDRESS</p>
      <input placeholder='Enter Name'></input>
      <input placeholder='Mobile Number'></input>
      <input placeholder='Pin Code'></input>
      <input placeholder='Locality'></input>
      <input placeholder='City/District/Town'></input>
      <input placeholder='State'></input>
      <input placeholder='Landmark'></input>
      <input placeholder='Alternate Number'></input>
      <button>SAVE</button>
      <hr/>
      <p>SAVED ADDRESS</p>
    </div>
    <div className='buying-main'>
      <label>CARD</label><br/>
      <label>UPI</label><br/>
      <label>Cash on Delivery</label>
    </div>
    </div>
  )
}

export default BuyingprodUser

