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
    <div className='row buy-maindiv'>
      
    <div className='buying-main col-6'>
      <p>NEW ADDRESS</p>
      <input className='buy-input' placeholder='Enter Name'></input>
      <input className='buy-input' placeholder='Mobile Number'></input>
      <input className='buy-input' placeholder='Pin Code'></input>
      <input className='buy-input' placeholder='Locality'></input>
      <input className='buy-input' placeholder='City/District/Town'></input>
      <input className='buy-input' placeholder='State'></input>
      <input className='buy-input' placeholder='Landmark'></input>
      <input className='buy-input' placeholder='Alternate Number'></input>
      <br/>
      <button className='buy-savebtn'>SAVE</button>
      <hr/>
      <p>SAVED ADDRESS</p>
    </div>
    <div className='buying-main col-3'>
        <div >
         <img className='buying-img' src={Product.image} alt="Card image cap" />
         </div>
         <div>
         {Product.title}
         <br/>
         <b >{'RS. '+Product.price}</b>
         </div>
    </div>
    <div className='buying-payment'>
      <label>CARD</label><input name='buy' type='radio' /><br/>
      <label>UPI</label><input name='buy' type='radio' /><br/>
      <label>Cash on Delivery</label> <input name='buy' type='radio' />  
    </div>
   
    </div>
  )
}

export default BuyingprodUser

