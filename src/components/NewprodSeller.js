import React, { useState } from 'react'
import './NewprodSeller.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function NewprodSeller() {

  const[data,SetData]=useState({name:'',brand:'',quantity:'',material:'',specifications:'',price:'',image:'null'})

  const change=(b)=>{

    if(b.target.name === "image"){
      // handleImageUpload(e);
      SetData({...data,image:b.target.files[0]});
  }else {
      SetData({...data,[b.target.name]:b.target.value})
  }
  console.log(data);


}

function productAdd(b){
  console.log("data ip",data);
  b.preventDefault()
  axios.post('http://localhost:3000/newproduct',data,{ 
    headers:{
          "Content-Type": "multipart/form-data",
        }
      })
  .then((rec)=>{
    console.log(rec);
    alert("added successfully")
  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className='prodseller-main-bg'>
      <form onSubmit={productAdd}>
      <div className='prodseller-main'>
        <h3 className='prod-sellerhead'>Add a New Product to Store</h3>
        <tr>
     
       <td><label  className='prod-sellerlabel'>Product name</label></td> 
        <td><input className='prod-sellerinput' type='text'  name='name' value={data.name} onChange={change} required></input></td>
      
      </tr>
      <tr>
      
       <td> <label  className='prod-sellerlabel'>Product brand  </label></td>
      <td><input  className='prod-sellerinput' type='text'  name='brand' value={data.brand} onChange={change} required></input></td>
      
      </tr>
      <tr>
      
        <td><label  className='prod-sellerlabel'>Quantity </label></td>
       <td> <input  className='prod-sellerinput' type='number' name='quantity' value={data.quantity} onChange={change} required></input></td>
    
      </tr>
      <tr>
      
        <td><label  className='prod-sellerlabel'>Material </label></td>
        <td><input  className='prod-sellerinput' type='text' name='material' value={data.material} onChange={change} required></input></td>
      
      </tr>
      <tr>
     
       <td> <label  className='prod-sellerlabel'>Specifications</label></td>
        <td><input  className='prod-sellerinput' type='text'  name='specifications' value={data.specifications} onChange={change} required></input></td>
      
      </tr>
      <tr>
       <td> <label  className='prod-sellerlabel'>Price</label></td>
       <td> <input  className='prod-sellerinput' type='number'  name='price' value={data.price} onChange={change} required></input></td>
      </tr>
      <tr>
       <td><label  className='prod-sellerlabel'>Photo : </label></td> 
       <td> <input   className='prod-sellerinput'type='file' name='image' onChange={change} required></input></td> 
        </tr>
      
      <button type='submit' className='new-prod-btn' >Add</button>

      </div>
      </form>
    </div>
    
    
  )

}

export default NewprodSeller