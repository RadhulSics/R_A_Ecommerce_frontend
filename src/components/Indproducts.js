import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios';
import './Indproducts.css';
import { Link, useParams } from 'react-router-dom';

function Indproducts() {
  const[State,SetState]=useState({
    image1:{filename:''},
    image2:{filename:''},
    image3:{filename:''}
  })

  const {id}=useParams()
  console.log(id);

useEffect(()=>{
  axios.post(`http://localhost:3000/viewIndividualproducts/${id}`)
  .then((rec)=>{
    SetState(rec.data)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

  return (
    <div className='row ind-main-div'>
      <div id="carouselExample" class="carousel slide col-6 " style={{width:'50%'}}>
  <div class="carousel-inner">
    <div class="carousel-item active caro-change">
      <img src={`http://localhost:3000/${State.image1.filename}`} class="d-block w-100 indprod-img" alt="..."/>
    </div>
    <div class="carousel-item caro-change">
      <img src={`http://localhost:3000/${State.image2.filename}`} class="d-block w-100 indprod-img" alt="..."/>
    </div>
    <div class="carousel-item caro-change">
      <img src={`http://localhost:3000/${State.image3.filename}`} class="d-block w-100 indprod-img" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev carousel-control-prev1" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next carousel-control-next1" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className='col-6 ind-part'>
  <h2 className='ind-title'>{State.brand}</h2>
  <p>{State.name} </p>
  <hr/>

  <div>
  <p className='ind-price'>Rs : 299 </p>
  </div>
  {/* <div className='ind-rating'>
  <h6>RATING : </h6>
  <p>4.2 ⭐</p>
</div> */}
  <hr/>

  {/* <div class="radio-toolbar">
    <h5>Select Size</h5>
    <input className='ind-input' type="radio" id="radioS" name="radiosize" value="S"/>
    <label className='ind-label' for="radioS">S</label>

    <input className='ind-input' type="radio" id="radioM" name="radiosize" value="M"/>
    <label className='ind-label'  for="radioM">M</label>

    <input className='ind-input' type="radio" id="radioL" name="radiosize" value="L"/>
    <label className='ind-label'  for="radioL">L</label> 

    <input className='ind-input' type="radio" id="radioXL" name="radiosize" value="XL"/>
    <label className='ind-label'  for="radioXL">XL</label> 
</div> */}
<div className='ind-details'>
 

<h6 className='ind-spec'>
Specifications :
</h6>
{State.specifications}
 
</div>
<hr/>


</div>

       
    </div>
  )
}

export default Indproducts