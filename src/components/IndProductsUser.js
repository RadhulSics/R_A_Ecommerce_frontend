import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './IndProductsUser.css'
import { Link, useNavigate, useParams } from 'react-router-dom';

function IndProductsUser() {

  const[State,SetState]=useState({
    image1:{filename:''},
    image2:{filename:''},
    image3:{filename:''}
  })

  const {id}=useParams()
  console.log("prodid",id);
  const uid = localStorage.getItem("uid")
  console.log("userid",uid);
  const navigate = useNavigate()

useEffect(()=>{
  axios.post(`http://localhost:3000/viewIndividualproducts/${id}`)
  .then((rec)=>{
    SetState(rec.data)
  })
  .catch((err)=>{
    console.log(err)
  })
},[])

  const addItem=()=>{
    axios.post(`http://localhost:3000/addCart/${uid}/${id}`)
    .then((rec)=>{
      alert('Item added to cart');
      navigate('/CartUser')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
    
  

console.log(State);
  return (
    <div className="row">
      <div
        id="carouselExample"
        className="carousel slide col-6 "
      >
        <div className="carousel-inner " >
          <div className="carousel-item active caro-change" >
            <img src={`http://localhost:3000/${State.image1.filename}`} className="d-block w-100 indprodU-img" alt="img1" />
          </div>
          <div className="carousel-item caro-change">
          <img src={`http://localhost:3000/${State.image2.filename}`} className="d-block w-100 indprodU-img" alt="img2" />
          </div>
          <div className="carousel-item caro-change">
          <img src={`http://localhost:3000/${State.image3.filename}`} className="d-block w-100 indprodU-img" alt="img3" />
          </div>
        </div>
        <div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        

      </div>

      <div className="col-5">
        <div className="indprodU-title">
      <h2><b>{State.brand}</b></h2>
  <p>{State.name} </p>
  </div>
  <hr style={{width:'50rem'}}/>

  <div>
  <p className='indprodU-price'>Rs : {State.price} </p>
  </div>
  {/* <div className='indprodU-rating'>
  <h6>RATING : 4.2 ⭐ </h6>
  
</div> */}
  <hr style={{width:'50rem'}}/>
  <div  className="radio-toolbar">
  <label className='indprodU-label' for="radioS">{State.size}</label>
  </div >
{/* 
  <div class="radio-toolbar">
    <h5>Select Size</h5>
    <input className='indprodU-input' type="radio" id="radioS" name="radiosize" value="S"/>
    <label className='indprodU-label' for="radioS">S</label>

    <input className='indprodU-input' type="radio" id="radioM" name="radiosize" value="M"/>
    <label className='indprodU-label'  for="radioM">M</label>

    <input className='indprodU-input' type="radio" id="radioL" name="radiosize" value="L"/>
    <label className='indprodU-label'  for="radioL">L</label> 

    <input className='indprodU-input' type="radio" id="radioXL" name="radiosize" value="XL"/>
    <label className='indprodU-label'  for="radioXL">XL</label> 
</div> */}

<div className='indprodU-details'>


<h6 className='indprodU-spec'>
Specifications :
</h6>
<p>{State.specifications}</p>
</div>
      </div>
      <div>
        <button className='indprodU-buy-btn'type='submit'><Link className="Link-decoration" to={`/BuyingprodUser/${State._id}`}>BUY NOW</Link></button>
        <button className='indprodU-cart-btn' onClick={addItem}>Add to cart</button>
        </div>
    </div>
  );
}

export default IndProductsUser;
