import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import image1 from "../images/image1.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image3.jpg";
import './StyleR.css'

function IndProductsSeller() {
  return (
    <div  className="row main-div">
      <div
        id="carouselExample"
        class="carousel slide col-5  "
      >
        <div class="carousel-inner " >
          <div class="carousel-item active caro-change" >
            <img src={image1} class="d-block w-100 indprodS-img" alt="..." />
          </div>
          <div class="carousel-item caro-change">
            <img src={image2} class="d-block w-100 indprodS-img" alt="..." />
          </div>
          <div class="carousel-item caro-change">
            <img src={image3} class="d-block w-100 indprodS-img" alt="..." />
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
        <button className='indprodS-buy-btn'type='submit'>BUY NOW</button>
        </div>
      </div>

      <div className="col-7">
        <div className="indprodS-title">
      <h2><b>Stormborn</b></h2>
  <p>Graphic Printed Oversized t-shirt </p>
  </div>
  <hr style={{width:'50rem'}}/>

  <div>
  <p className='indprodS-price'>Rs : 299 </p>
  </div>
  <div className='indprodS-rating'>
  <h6>RATING : 4.2 ⭐ </h6>
  
</div>
  <hr style={{width:'50rem'}}/>

  <div class="radio-toolbar">
    <h5>Select Size</h5>
    <input className='indprodS-input' type="radio" id="radioS" name="radiosize" value="S"/>
    <label className='indprodS-label' for="radioS">S</label>

    <input className='indprodS-input' type="radio" id="radioM" name="radiosize" value="M"/>
    <label className='indprodS-label'  for="radioM">M</label>

    <input className='indprodS-input' type="radio" id="radioL" name="radiosize" value="L"/>
    <label className='indprodS-label'  for="radioL">L</label> 

    <input className='indprodS-input' type="radio" id="radioXL" name="radiosize" value="XL"/>
    <label className='indprodS-label'  for="radioXL">XL</label> 
</div>

<div className='indprodS-details'>
  <h5 className='indprodS-det'>
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
<br/>

<h6 className='indprodS-spec'>
Specifications :
</h6>
Fabric Cotton Fit Oversized Length Regular Main Trend Graphic Print Others Multipack Set Single Neck Round Neck Number of Items 1
 
</div>
      </div>
    </div>
  );
}

export default IndProductsSeller;
