import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios';
import './login.css';
import image1 from '../images/image1.jpg'
import image2 from '../images/image2.jpg'
import image3 from '../images/image3.jpg'

function Indproducts() {
  

  return (
    <div className='row'>
      <div id="carouselExample" class="carousel slide col-6 " style={{width:'50%'}}>
  <div class="carousel-inner">
    <div class="carousel-item active caro-change">
      <img src={image1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item caro-change">
      <img src={image2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item caro-change">
      <img src={image3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div className='col-6'>
  <h2>Stormborn</h2>
  <p>Graphic Printed Oversized t-shirt </p>
  
  <hr/>

  <div>
  <p className='ind-price'>Rs : 299 </p>
  </div>
  <hr/>

  <div class="radio-toolbar">
    <h5>Select Size</h5>
    <input className='ind-input' type="radio" id="radioS" name="radiosize" value="S"/>
    <label className='ind-label' for="radioS">S</label>

    <input className='ind-input' type="radio" id="radioM" name="radiosize" value="M"/>
    <label className='ind-label'  for="radioM">M</label>

    <input className='ind-input' type="radio" id="radioL" name="radiosize" value="L"/>
    <label className='ind-label'  for="radioL">L</label> 

    <input className='ind-input' type="radio" id="radioXL" name="radiosize" value="XL"/>
    <label className='ind-label'  for="radioXL">XL</label> 
</div>
<div>
  <h5 className='ind-det'>
  PRODUCT DETAILS 
  </h5>
  <p>
Black T-shirt for men
Graphic printed
Regular length
Round neck
Short, drop shoulder sleeves
Knitted cotton fabric
</p>
Size & Fit
Oversized
The model (height 6') is wearing a size M

Material & Care
100% Cotton
Machine Wash

<h6>
Specifications
</h6>

Fabric
Cotton
Fit
Oversized
Length
Regular
Main Trend
Graphic Print Others
Multipack Set
Single
Neck
Round Neck
Number of Items
1
 
</div>
<hr/>
<div>
  <h6>RATING </h6>
  <p>4.2 ⭐</p>
</div>

</div>
<div>
  <button className='buy-btn'type='submit'>BUY NOW</button>
</div>
       
    </div>
  )
}

export default Indproducts