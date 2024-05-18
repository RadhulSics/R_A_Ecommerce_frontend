import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './FullproductsUser.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Link } from 'react-router-dom';

function FullproductsUser() {
    const [state,setState]=useState([]);
    useEffect(()=>{
        axios.post('http://localhost:3000/viewproducts')
        .then((res)=>{
         console.log('successful');
         console.log(res);
         setState(res.data)
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])
    console.log(state)

  return (
    <div >
        <Link to='/IndProductsUser' className='Link-decoration' >
        <div className='row fullU-main'>
            {state.map((c)=>{
                return(
                    <div className="card col-2 fullU-col">
           <img className="card-img-top fullU-img" src={`http://localhost:3000/${c.image.filename}`} alt='image' />
           <div className="card-body">
            <div className='fullU-name'>
            {c.name+" "}
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
        </Link>
    </div>
  )
}

export default FullproductsUser