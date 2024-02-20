import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function OwnprodSeller() {
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
        <div className='row ownS-main'>
            {state.map((d)=>{
                return(
                    <div className="card col-2 ownS-col">
           <img className="card-img-top ownS-img" src={d.image+" "} />
           <div className="card-body">
            <div className='ownS-name'>
            {d.title+" "}
            </div> 
            <hr/>
            <div className='ownS-price'>
            {'Rs. '+d.price+" "}
            </div> 
            </div> 
          </div>
                )

            })}
        </div>
    </div>
  )
}

export default OwnprodSeller