import React, { useEffect, useState } from "react";
import './ProfileEditSeller.css';
import axios from 'axios';

function ProfeditSeller() {

    const[data,setdata]=useState({username:"",contact:"",email:"",gender:"",image:null})
    const sellerid=localStorage.getItem("sellerid")
      console.log(sellerid);

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
        axios.post(`http://localhost:4030/viewSellerById/${sellerid}`)
        .then((res)=>{
            console.log(res);
            setdata(res.data.data)
          })
          .catch((err)=>{
            console.log(err);
          })
        },[sellerid])
      
        let Edit=(a)=>{
            a.preventDefault()
        
            axios.post(`http://localhost:4030/editSellerbyid/${sellerid}`,data)
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
            <form onSubmit={Edit}>
                <div>
                    <input type='text' name='username' value={data.username} className='form-control profeditU-input' onChange={change} placeholder='username'  />
                </div>
                <div>
                <input type='number' name='contact'  value={data.contact} className='form-control profeditU-input' onChange={change} placeholder='phone number'/>
                </div>
                <div>
                    <input type='email' name='email'    value={data.email} className='form-control profeditU-input' onChange={change} placeholder='email'/>
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
            <input type='file' name='image' onChange={change} />
          </div>
          <div>
            <button className='profeditU-button'>DONE</button>
          </div>
            </form>
        </div>
    </div>
  )
}

export default ProfeditSeller