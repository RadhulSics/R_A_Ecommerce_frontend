import React, { useEffect, useState } from 'react';
import './ProfeditSeller.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProfeditSeller() {
  const sid = localStorage.getItem('sid');
  const [profile, setProfile] = useState(null);
  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    image: null,
    gender: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    axios.post(`http://localhost:3000/viewSeller/${sid}`)
      .then(response => {
        const userData = response.data;
        setProfile(userData);
        setData({
          ...userData,
          image: null, // Reset image to null to avoid pre-filling it
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  const change = (e) => {
    const { name, value, files } = e.target;
    setData(prevData => ({
      ...prevData,
      [name]: name === 'image' ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (/\d/.test(data.name)) {
      alert("Name cannot contain numbers.");
      return;
    }

    if (!/^\d{10}$/.test(data.number)) {
      alert("Phone number must be exactly 10 digits.");
      return;
    }

    if (!/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-zA-Z])(?=.{6,})/.test(data.password)) {
      alert('Password must be at least 6 characters long and contain at least one special character, one number, and one letter.');
      return;
    }

    if (!data.image) {
      alert("Image is required.");
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('number', data.number);
    formData.append('password', data.password);
    formData.append('gender', data.gender);
    formData.append('image', data.image);

    axios.post(`http://localhost:3000/editSeller/${sid}`, formData, { 
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((rec) => {
      console.log(rec);
      alert("Updated successfully");
      navigate('/ProfileSeller');
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      {profile && (
        <div className='profeditS-main'>
          <div>
            <h3 style={{textAlign:'center'}}>EDIT PROFILE</h3>
      
            <input
              className='profeditS-input'
              type='text'
              value={data.name}
              name='name'
              onChange={change}
            />
          </div>
          <div>
            <input
              className='profeditS-input reg-number'
              type='text'
              value={data.number}
              name='number'
              onChange={change}
              maxLength="10"
            />
          </div>
          <div>
            <input
              className='profeditS-input'
              type='email'
              value={data.email}
              name='email'
              onChange={change}
            />
          </div>
          <div>
            <input
              className='profeditS-input'
              type='password'
              value={data.password}
              name='password'
              onChange={change}
            />
          </div>
          <div>
            <label className='profeditS-label'>Male</label>
            <input type='radio' name='gender' value='male' checked={data.gender === 'male'} onChange={change} />
            <label className='profeditS-label'>Female</label>
            <input type='radio' name='gender' value='female' checked={data.gender === 'female'} onChange={change} />
          </div>
          <div className='profeditS-imageupload-box'>
            <label className='profeditS-imageupload-label'>Upload image :</label>
            <input type='file' name='image' onChange={change} required />
          </div>
          <div>
            <button className='profeditS-button' onClick={handleSubmit}>DONE</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfeditSeller;
