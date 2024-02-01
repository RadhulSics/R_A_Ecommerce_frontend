import React, { useEffect, useState } from 'react'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios';

function ProductApproval() {
    const [state,setState]=useState([])
    useEffect(()=>{
        axios.get('https://api.escuelajs.co/api/v1/users')
        .then((res)=>{
            setState(res.data)

        })
        .catch((error)=>{
            console.log(error)

        })
    },[])
    console.log(state)

  return (
    <div>
        <div>
            {state.map((a)=>{
              return(
                 
             

<div class="card proapp-card" >
  <img src={a.avatar} class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-text">Rs : 199</p>
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
  </div>
</div>
              )
 })}
</div>
    </div>

  )

}

export default ProductApproval