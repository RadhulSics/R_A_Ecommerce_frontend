import React, { useState } from 'react';
import './NewprodSeller.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

function NewprodSeller() {
  const sid = localStorage.getItem('sid');
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    brand: '',
    quantity: '',
    material: '',
    specifications: '',
    price: '',
    image1: null,
    image2: null,
    image3: null,
    sid: sid,
    gender: 'male',
    category: 'Shirt',
    size: 'S',
  });

  const change = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image1' || name === 'image2' || name === 'image3') {
      setData(prevData => ({ ...prevData, [name]: files[0] }));
    } else {
      if ((name === 'name' || name === 'brand' || name === 'material') && /\d/.test(value)) {
        alert(`${name.charAt(0).toUpperCase() + name.slice(1)} cannot contain numbers.`);
        return;
      }
      setData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(data).forEach(key => {
      formData.append(key, data[key]);
    });

    axios.post('http://localhost:3000/newproduct', formData, { 
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((rec) => {
      console.log(rec);
      alert("Added successfully");
      navigate('/OwnprodSeller');
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className='prodseller-main-bg'>
      <form onSubmit={handleSubmit}>
        <div className='prodseller-main'>
          <h3 className='prod-sellerhead'>ADD NEW PRODUCT</h3>
          <div className='prodseller-main2'>
            <div>
              <label className='prod-sellerlabel'>Product name</label>
              <input className='prod-sellerinput' type='text' name='name' value={data.name} onChange={change} required />
            </div>
            <div>
              <label className='prod-sellerlabel'>Product brand</label>
              <input className='prod-sellerinput' type='text' name='brand' value={data.brand} onChange={change} required />
            </div>
            <div>
              <label className='prod-sellerlabel'>Quantity</label>
              <input className='prod-sellerinput' type='number' name='quantity' value={data.quantity} onChange={change} required />
            </div>
            <div>
              <label className='prod-sellerlabel'>Material</label>
              <input className='prod-sellerinput' type='text' name='material' value={data.material} onChange={change} required />
            </div>
            <div>
              <label className='prod-sellerlabel'>Specifications</label>
              <textarea className='prod-sellerinput' rows={3} cols={30} name='specifications' value={data.specifications} onChange={change} required></textarea>
            </div>
            <div>
              <label className='prod-sellerlabel'>Price</label>
              <input className='prod-sellerinput' type='number' name='price' value={data.price} onChange={change} required />
            </div>
            <div>
              <label className='prod-sellerlabel'>Photo 1</label>
              <input className='prod-sellerinput' type='file' name='image1' onChange={change} required />
            </div>
            <div>
              <label className='prod-sellerlabel'>Photo 2</label>
              <input className='prod-sellerinput' type='file' name='image2' onChange={change} required />
            </div>
            <div>
              <label className='prod-sellerlabel'>Photo 3</label>
              <input className='prod-sellerinput' type='file' name='image3' onChange={change} required />
            </div>
          </div>
          <div className='prodseller-main3'>
            <div>
              <label className='prod-sellerlabel'>Gender</label>
              <select name='gender' onChange={change} value={data.gender} required>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div>
              <label className='prod-sellerlabel'>Category</label>
              <select name='category' onChange={change} value={data.category}>
                <option value='Shirt'>Shirt</option>
                <option value='Pant'>Pant</option>
                <option value='Jacket'>Jacket</option>
                <option value='Shoe'>Shoe</option>
                <option value='Watch'>Watch</option>
                <option value='Belt'>Belt</option>
              </select>
            </div>
            <div>
              <label className='prod-sellerlabel'>Size</label>
              <select name='size' onChange={change} value={data.size}>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
              </select>
            </div>
          </div>
          <button type='submit' className='new-prod-btn'>Add</button>
        </div>
      </form>
    </div>
  );
}

export default NewprodSeller;
