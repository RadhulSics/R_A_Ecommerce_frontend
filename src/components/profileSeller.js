import React, { useEffect, useState } from "react";
import './login.css'

import { Link } from 'react-router-dom';
import axios from 'axios';

function ProfileSeller() {

  const sellerid=localStorage.getItem("sellerid")
  console.log(sellerid);

  const[data,setdata]=useState({}) 
  useEffect(()=>{
    axios.post(`http://localhost:4030/viewSellerById/${sellerid}`)
    .then((res)=>{
      console.log(res);
      setdata(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[sellerid])





  return (
    <div>
        <div className='row'>
      <div className='col-4'>
        <div className='profS-name row'>
        <img className='col-5 profS-img' src={`http://localhost:4030/${data?.image?.filename}`} />
          <p className='col-5 profS-left1'>{data?.username}</p>
        </div>
        <div className='profS-name1'>
          <p className='profS-left'>CART ➡️</p>
        </div>
        <div className='profS-name1'>
          <p className='profS-left'>Warehouse ➡️</p>
        </div>
        <div className='profS-name1'>
          <p className='profS-left'>Help center ➡️</p>
        </div>
        <div >
          <button className='profS-logout'>LOG OUT</button>
        </div>
      </div>

      <div className='col-7 profS-details'>
        <h3 className='profS-head'><b>DETAILS</b></h3>
        <hr/>
        <div className='profS-body'>
          <p>Name :{data?.username} </p>
          <p>Mobile : {data?.contact}</p>
          <p>Email :{data?.email}</p>
          <p>Gender :{data?.gender}</p>
        
        </div>
        <div>
          <button className='profS-edit'><Link className='Link-decoration' to='/profileeditSeller'> EDIT</Link></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileSeller