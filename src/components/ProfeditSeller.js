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
  const [userType, setUserType] = useState('user');
  const navigate = useNavigate();

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    axios.post(`http://localhost:3000/viewSeller/${sid}`)
      .then(response => {
        setProfile(response.data);
        setData(response.data); // Set initial values for the form fields
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
    axios.post(`http://localhost:3000/editSeller/${sid}`,data,{ 
      headers:{
            "Content-Type": "multipart/form-data",
          }
        })
    .then((rec)=>{
      console.log(rec);
      alert("Updated successfully")
      navigate('/ProfileSeller')
    })
    .catch((err)=>{
      console.log(err)
    })}

  return (
    <div>
      {profile && (
        <div className='profeditS-main'>
          <div>
            <label>User name :</label>
            <input className='profeditS-input' type='text' value={data.name} name='name' onChange={change} />
          </div>
          <div>
          <label>number:</label>
            <input className='profeditS-input reg-number' type='number' value={data.number} name='number' onChange={change} />
          </div>
          <div>
          <label>email :</label>
            <input className='profeditS-input' type='email' value={data.email} name='email' onChange={change} />
          </div>
          <label>password:</label>
          <input className='profeditS-input' type='password' value={data.password} name='password' onChange={change} />
          <div>
            <label className='profeditS-label'>Male</label>
            <input type='radio' name='gender' value='user' checked={userType === 'user'} onChange={() => setUserType('user')} />
            <label className='profeditS-label'>Female</label>
            <input type='radio' name='gender' value='seller' checked={userType === 'seller'} onChange={() => setUserType('seller')} />
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
