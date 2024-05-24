import React, { useEffect, useState } from 'react';
import './ProfeditUser.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProfeditUser() {
  const uid = localStorage.getItem('uid');
  const [data, setData] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    image: null,
    gender: 'male',
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    axios.post(`http://localhost:3000/viewUser/${uid}`)
      .then(response => {
        const userData = response.data.data; // Assuming the user data is in response.data.data
        setData({
          name: userData.name,
          email: userData.email,
          number: userData.number,
          password: userData.password,
          image: null,
          gender: userData.gender,
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
    const formData = new FormData();

    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('number', data.number);
    formData.append('password', data.password);
    formData.append('gender', data.gender);
    if (data.image) {
      formData.append('image', data.image);
    }

    axios.post(`http://localhost:3000/editUser/${uid}`, formData, { 
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((rec) => {
      console.log(rec);
      alert("Updated successfully");
      navigate('/ProfileUser');
    })
    .catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <div className='profeditU-main'>
        <form onSubmit={handleSubmit}>
          <div>
            <input className='profeditU-input' type='text' value={data.name} name='name' onChange={change} />
          </div> 
          <div>
            <input className='profeditU-input reg-number' type='number' value={data.number} name='number' onChange={change} />
          </div>
          <div>
            <input className='profeditU-input' type='email' value={data.email} name='email' onChange={change} />
          </div>
          <div>
            <input className='profeditU-input' type='password' value={data.password} name='password' onChange={change} />
          </div>
          <div>
            <label className='profeditU-label'>Male</label>
            <input type='radio' name='gender' value='male' checked={data.gender === 'male'} onChange={change} />
            <label className='profeditU-label'>Female</label>
            <input type='radio' name='gender' value='female' checked={data.gender === 'female'} onChange={change} />
          </div>
          <div className='profeditU-imageupload-box'>
            <label className='profeditU-imageupload-label'>Upload image :</label>
            <input type='file' name='image' onChange={change} />
          </div>
          <div>
            <button className='profeditU-button' type='submit'>DONE</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfeditUser;
