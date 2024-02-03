import React, { useEffect, useState } from 'react'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios';

function ProductApproval() {
    const [state,setState]=useState([])
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            setState(res.data)

        })
        .catch((error)=>{
            console.log(error)

        })
    },[])
    console.log(state)

  return (
    <div className='pro-main'>
        <div className='row proapp-main'>
            {state.map((a)=>{
              return(
<div class="card proapp-card col-4" >
  <img src={a.image} class="card-img-top proapp-img" alt="..."/>
  <div class="card-body">
    <h4 className='proapp-name'>{a.name}</h4>
    <hr/>
    <p class="card-text proapp-price">Rs : 199</p>
    <hr/>
    <p className='proapp-det'>Details : </p>
    <p>Black T-shirt for men
Graphic printed
Regular length
Round neck
Short, drop shoulder sleeves
Knitted cotton fabric
</p>
<p>

Size & Fit
Oversized
The model (height 6') is wearing a size M

Material & Care
100% Cotton
Machine Wash
    </p>
    <hr/>
    <div className='proapp-btnflex'>
    <div>
      <button className='proapp-accept' type='submit'>ACCEPT</button>
    </div>
    <div> 
    <button className='proapp-decline' type='submit'>DECLINE</button>
    </div>
    </div>
  </div>
</div>
              )
 })}
</div>
    </div>

  )

}

export default ProductApproval