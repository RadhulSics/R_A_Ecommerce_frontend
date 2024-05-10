import React, { useState } from 'react'
import './login.css';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function NewprodSeller() {

  const[data,setData]=useState({name:'',brand:'',quantity:'',material:'',specifications:'',price:''})


function change(a){
  setData({...data,[a.target.name]:a.target.value})
  console.log(data);
}

function productAdd(b){
  console.log("data ip",data);
  b.preventDefault()
  axios.post('http://localhost:3000/newproduct',data)
  .then((rec)=>{
    console.log(rec);
  })
  .catch((err)=>{
    console.log(err)
  })
}

  return (
    <div>
      <form onSubmit={productAdd}>
      <div className='prodseller-main'>
        <h3 className='prod-sellerhead'>Add a New Product to Store</h3>
        <tr>
     
       <td><label  className='prod-sellerlabel'>Product name :</label></td> 
        <td><input className='prod-sellerinput' type='text' placeholder='product name' name='name' value={data.name} onChange={change}></input></td>
      
      </tr>
      <tr>
      
       <td> <label  className='prod-sellerlabel'>Product brand : </label></td>
      <td><input  className='prod-sellerinput' type='text' placeholder='product brand' name='brand' value={data.brand} onChange={change}></input></td>
      
      </tr>
      <tr>
      
        <td><label  className='prod-sellerlabel'>Quantity :</label></td>
       <td> <input  className='prod-sellerinput' type='number' placeholder='quantity' name='quantity' value={data.quantity} onChange={change}></input></td>
    
      </tr>
      <tr>
      
        <td><label  className='prod-sellerlabel'>Material :</label></td>
        <td><input  className='prod-sellerinput' type='text' placeholder='Material' name='material' value={data.material} onChange={change}></input></td>
      
      </tr>
      <tr>
     
       <td> <label  className='prod-sellerlabel'>Specifications:</label></td>
        <td><input  className='prod-sellerinput' type='text' placeholder='specifications' name='specifications' value={data.specifications} onChange={change}></input></td>
      
      </tr>
      <tr>
       <td> <label  className='prod-sellerlabel'>Price:</label></td>
       <td> <input  className='prod-sellerinput' type='number' placeholder='price' name='price' value={data.price} onChange={change}></input></td>
      </tr>
      {/* <tr>
       <td><label  className='prod-sellerlabel'>Photo : </label></td> 
       <td> <input   className='prod-sellerinput'type='file'></input></td> 
        </tr> */}
      
      <button type='submit' className='new-prod-btn'>Add</button>

      </div>
      </form>
    </div>
    
    
  )

}

export default NewprodSeller