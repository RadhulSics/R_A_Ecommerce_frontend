import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link, useParams } from 'react-router-dom';
import './IndProductsSeller.css'

function IndProductsSeller() {
  
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

console.log(State);

  return (
    <div  className="row main-div">
      <div
        id="carouselExample"
        class="carousel slide col-5  "
      >
        <div class="carousel-inner " >
          <div class="carousel-item active caro-change" >
            <img src={`http://localhost:3000/${State.image1.filename}`} class="d-block w-100 indprodS-img" alt="..." />
          </div>
          <div class="carousel-item caro-change">
            <img src={`http://localhost:3000/${State.image2.filename}`} class="d-block w-100 indprodS-img" alt="..." />
          </div>
          <div class="carousel-item caro-change">
            <img src={`http://localhost:3000/${State.image3.filename}`} class="d-block w-100 indprodS-img" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        <br/> <br/> <br/> <br/>
        <div>
        {/* <button className='indprodS-buy-btn'type='submit'>BUY NOW</button> */}
        </div>
      </div>

      <div className="col-7">
        <div className="indprodS-title">
      <h2><b>{State.brand}</b></h2>
  <p>{State.name} </p>
  </div>
  <hr style={{width:'50rem'}}/>

  <div>
  <p className='indprodS-price'>Rs : 299 </p>
  </div>
  {/* <div className='indprodS-rating'>
  <h6>RATING : 4.2 ⭐ </h6>
  
</div> */}
  <hr style={{width:'50rem'}}/>

  {/* <div class="radio-toolbar">
    <h5>Select Size</h5>
    <input className='indprodS-input' type="radio" id="radioS" name="radiosize" value="S"/>
    <label className='indprodS-label' for="radioS">S</label>

    <input className='indprodS-input' type="radio" id="radioM" name="radiosize" value="M"/>
    <label className='indprodS-label'  for="radioM">M</label>

    <input className='indprodS-input' type="radio" id="radioL" name="radiosize" value="L"/>
    <label className='indprodS-label'  for="radioL">L</label> 

    <input className='indprodS-input' type="radio" id="radioXL" name="radiosize" value="XL"/>
    <label className='indprodS-label'  for="radioXL">XL</label> 
</div> */}

<div className='indprodS-details'>

<h6 className='indprodS-spec'>
Specifications :
</h6>
{State.specifications}
</div>
      </div>
    </div>
  );
}

export default IndProductsSeller;
