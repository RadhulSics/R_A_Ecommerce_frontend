import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function NewprodSeller() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    productname: "",
    productbrand: "",
    quantity: "",
    material: "",
    specifications: "",
    price: "",
    gender: "",
    category: "",
    size: "",
    sellerid: localStorage.getItem('sellerid'), 
    image1: null,
    image2: null,
    image3: null
  });

  useEffect(() => {
    const sellerid = localStorage.getItem('sellerid');
    if (sellerid) {
      setData(prevData => ({ ...prevData, sellerid }));
    }
  }, []);

  const change = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image1' || name === 'image2' || name === 'image3') {
      setData(prevData => ({ ...prevData, [name]: files[0] }));
    } else {
      if ((name === 'productname' || name === 'productbrand' || name === 'material') && /\d/.test(value)) {
        alert(`${name.charAt(0).toUpperCase() + name.slice(1)} cannot contain numbers.`);
        return;
      }
      setData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const submit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (let key in data) {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    }

    axios.post('http://localhost:4030/addnewproduct', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      if (res.data.status === 200) {
        alert('Product Added!');
        navigate('/OwnprodSeller');
      } else {
        alert('Product addition failed: ' + res.data.msg);
      }
    })
    .catch((err) => {
      console.error(err);
      alert('An error occurred while adding the product. Please try again.');
    });
  };

  return (
    <div className='prodseller-main-bg'>
      <form onSubmit={submit}>
        <div className='prodseller-main'>
          <h3 className='prod-sellerhead'>ADD NEW PRODUCT</h3>
          <div className='prodseller-main2'>
            {/* Form Inputs */}
            <div>
              <label className='prod-sellerlabel'>Product name:</label>
              <input className='prod-sellerinput' type='text' name='productname' value={data.productname} onChange={change} />
            </div>
            <div>
              <label className='prod-sellerlabel'>Product brand:</label>
              <input className='prod-sellerinput' type='text' name='productbrand' value={data.productbrand} onChange={change} />
            </div>
            <div>
              <label className='prod-sellerlabel'>Quantity:</label>
              <input className='prod-sellerinput' type='number' name='quantity' value={data.quantity} onChange={change} />
            </div>
            <div>
              <label className='prod-sellerlabel'>Material:</label>
              <input className='prod-sellerinput' type='text' name='material' value={data.material} onChange={change} />
            </div>
            <div>
              <label className='prod-sellerlabel'>Specifications:</label>
              <textarea className='prod-sellerinput' rows={3} cols={30} name='specifications' value={data.specifications} onChange={change}></textarea>
            </div>
            <div>
              <label className='prod-sellerlabel'>Price:</label>
              <input className='prod-sellerinput' type='number' name='price' value={data.price} onChange={change} />
            </div>
            <div>
              <label className='prod-sellerlabel'>Photo 1</label>
              <input className='prod-sellerinput' type='file' name='image1' onChange={change} />
            </div>
            <div>
              <label className='prod-sellerlabel'>Photo 2</label>
              <input className='prod-sellerinput' type='file' name='image2' onChange={change} />
            </div>
            <div>
              <label className='prod-sellerlabel'>Photo 3</label>
              <input className='prod-sellerinput' type='file' name='image3' onChange={change} />
            </div>
          </div>
          <div className='prodseller-main3'>
            {/* Dropdowns */}
            <div>
              <label className='prod-sellerlabel'>Gender:</label>
              <select name='gender' value={data.gender} onChange={change}>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
              </select>
            </div>
            <div>
              <label className='prod-sellerlabel'>Category:</label>
              <select name='category' value={data.category} onChange={change}>
                <option value='Shirt'>Shirt</option>
                <option value='Pant'>Pant</option>
                <option value='Jacket'>Jacket</option>
                <option value='Shoe'>Shoe</option>
                <option value='Watch'>Watch</option>
                <option value='Belt'>Belt</option>
              </select>
            </div>
            <div>
              <label className='prod-sellerlabel'>Size :</label>
              <select name='size' value={data.size} onChange={change}>
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
