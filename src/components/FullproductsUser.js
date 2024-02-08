import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function FullproductsUser() {
    const [state,setState]=useState([]);
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
    <div >
        <div className='row fullU-main'>
            {state.map((c)=>{
                return(
                    <div className="card col-2 fullU-col">
           <img className="card-img-top fullU-img" src={c.image+" "} />
           <div className="card-body">
            <div className='fullU-name'>
            {c.title+" "}
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
    </div>
  )
}

export default FullproductsUser