import React from 'react'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function ProducteditSeller() {
  return (
    <div>
        <div className='editprodseller-main'>
        <h3 className='editprod-sellerhead'>Add a New Product to Store</h3>
        <tr>
     
       <td><label  className='editprod-sellerlabel'>Product name :</label></td> 
        <td><input className='editprod-sellerinput' type='text' placeholder='product name'></input></td>
      
      </tr>
      <tr>
      
       <td> <label  className='editprod-sellerlabel'>Product brand : </label></td>
      <td><input  className='editprod-sellerinput' type='text' placeholder='product brand'></input></td>
      
      </tr>
      <tr>
      
        <td><label  className='editprod-sellerlabel'>Quantity :</label></td>
       <td> <input  className='editprod-sellerinput' type='number' placeholder='quantity'></input></td>
    
      </tr>
      <tr>
      
        <td><label  className='editprod-sellerlabel'>Material :</label></td>
        <td><input  className='editprod-sellerinput' type='text' placeholder='Material'></input></td>
      
      </tr>
      <tr>
     
       <td> <label  className='editprod-sellerlabel'>Specifications:</label></td>
        <td><input  className='editprod-sellerinput' type='text' placeholder='specifications'></input></td>
      
      </tr>
      <tr>
       <td> <label  className='editprod-sellerlabel'>Price:</label></td>
       <td> <input  className='editprod-sellerinput' type='number' placeholder='price'></input></td>
      </tr>
      <tr>
       <td><label  className='editprod-sellerlabel'>Photo : </label></td> 
       <td> <input   className='editprod-sellerinput'type='file'></input></td> 
        </tr>
      

      </div>

    </div>
  )
}

export default ProducteditSeller