import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './OwnprodSeller.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function OwnprodSeller() {
    const [state,setState]=useState([]);
    const sid = localStorage.getItem('sid')
    console.log(sid)
    
    useEffect(()=>{
        axios.post(`http://localhost:3000/ownProducts/${sid}`)
        .then((res)=>{
            console.log(res.data);
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
           <img className="card-img-top ownS-img" src={`http://localhost:3000/${d.image1.filename}`} alt='image' />
           <div className="card-body">
            <div className='ownS-name'>
            {d.name+" "}
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