import React from 'react'
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


function NewprodSeller() {

  return (
    <div>

      <div className='prodseller-main'>
        <h3 className='prod-sellerhead'>Add a New Product to Store</h3>
        <tr>
     
       <td><label  className='prod-sellerlabel'>Product name :</label></td> 
        <td><input className='prod-sellerinput' type='text' placeholder='product name'></input></td>
      
      </tr>
      <tr>
      
       <td> <label  className='prod-sellerlabel'>Product brand : </label></td>
      <td><input  className='prod-sellerinput' type='text' placeholder='product brand'></input></td>
      
      </tr>
      <tr>
      
        <td><label  className='prod-sellerlabel'>Quantity :</label></td>
       <td> <input  className='prod-sellerinput' type='number' placeholder='quantity'></input></td>
    
      </tr>
      <tr>
      
        <td><label  className='prod-sellerlabel'>Material :</label></td>
        <td><input  className='prod-sellerinput' type='text' placeholder='Material'></input></td>
      
      </tr>
      <tr>
     
       <td> <label  className='prod-sellerlabel'>Specifications:</label></td>
        <td><input  className='prod-sellerinput' type='text' placeholder='specifications'></input></td>
      
      </tr>
      <tr>
       <td> <label  className='prod-sellerlabel'>Price:</label></td>
       <td> <input  className='prod-sellerinput' type='number' placeholder='price'></input></td>
      </tr>
      <tr>
       <td><label  className='prod-sellerlabel'>Photo : </label></td> 
       <td> <input   className='prod-sellerinput'type='file'></input></td> 
        </tr>
      

      </div>
      
    </div>
    
    
  )

}

export default NewprodSeller