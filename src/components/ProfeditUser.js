import React, { useEffect, useState } from "react";
import './StyleR.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function ProfeditUser() {
  const[data,setdata]=useState({username:"",contact:"",email:"",gender:"",image:null})
  const userid=localStorage.getItem("userid")
    console.log(userid);

   const change = (b) => {
    const { name, value, files } = b.target;
    if (name === "image") {
      // If the input is an image, handle it differently
      setdata(prevData => ({
        ...prevData,
        image: files[0]  // Store the selected file
      }));
    } else {
      setdata(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  useEffect(()=>{
    axios.post(`http://localhost:4030/viewCustById/${userid}`)
    .then((res)=>{
      console.log(res);
      setdata(res.data.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[userid])

  let Edit=(a)=>{
    a.preventDefault()

    axios.post(`http://localhost:4030/editCustById/${userid}`,data)
    .then((res)=>{
        console.log(res);
        if(res.status==200){
            alert('Profile edited')
          
     }
     else{
        alert('failed')
     }
    
    })
    .catch((error)=>{
        console.log(error)
       })

  }

  

  return (
    <div>
      <div className='profeditU-main'>
        <form  onSubmit={Edit}>
          <div>
            <input
              className='form-control profeditU-input'
              type='text'
              name='username'
              value={data.username}
              onChange={change}
              placeholder='Username...'
            />
          </div>
          <div>
            <input
              className='form-control profeditU-input reg-number'
              type='number'
              name='contact'
              value={data.contact}
              onChange={change}
              placeholder='Phone number...'
            />
          </div>
          <div>
            <input
              className='form-control profeditU-input'
              type='email'
              name='email'
              value={data.email}
              onChange={change}
              placeholder='Email...'
            />
          </div>

          <div>
            <label className='profeditU-label'>Male</label>
            <input
              type='radio'
              name='gender'
              value={data.gender}
              onChange={change}
              
            />
            <label className='profeditU-label'>Female</label>
            <input
              type='radio'
              name='gender'
              value={data.gender}
              onChange={change}
            />
          </div>

          <div className='profeditU-imageupload-box'>
            <input type='file' name='image'onChange={change} />
          </div>

          <div>
            <button className='profeditU-button'>DONE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfeditUser;
