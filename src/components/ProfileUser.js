import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Link } from 'react-router-dom';
import './ProfileUser.css';
import axios from 'axios';

function ProfileUser() {
  const uid = localStorage.getItem("uid");
  const [profile, setProfile] = useState(null);
  const [page, setPage] = useState(0);
  const [address, setAddress] = useState({ name: '', pin: '', number: '', city: '', state: '', landmark: '' });
  const [savedAddresses, setSavedAddresses] = useState([]);
  const [editAddressData, setEditAddressData] = useState({ name: '', pin: '', number: '', city: '', state: '', landmark: '' });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    axios.post(`http://localhost:3000/viewUser/${uid}`)
      .then(response => {
        setProfile(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const fetchAddress = () => {
    axios.post(`http://localhost:3000/showAddress/${uid}`)
      .then(response => {
        if (Array.isArray(response.data.data)) {
          setSavedAddresses(response.data.data);
        } else {
          setSavedAddresses([]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const saveAddress = () => {
    axios.post(`http://localhost:3000/newAddress/${uid}`, address)
      .then(() => {
        alert("Address added successfully");
        fetchAddress(); // Fetch addresses again after adding a new one
        setPage(0);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const deleteAddress = (id) => {
    axios.post(`http://localhost:3000/deleteAddress/${id}`)
      .then(() => {
        alert("Address deleted successfully");
        fetchAddress(); // Fetch addresses again after deleting
      })
      .catch(err => {
        console.log(err);
      });
  }

  const editAddress = () => {
    axios.post(`http://localhost:3000/editAddress/${editAddressData._id}`, editAddressData)
      .then(() => {
        alert("Address edited successfully");
        setEditAddressData({ name: '', pin: '', number: '', city: '', state: '', landmark: '' }); // Reset the editAddressData state
        fetchAddress(); // Fetch addresses again after editing
        setPage(1); // Return to the address list
      })
      .catch(err => {
        console.log(err);
      });
  }

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setEditAddressData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const startEditAddress = (addr) => {
    setEditAddressData(addr);
    setPage(2);
  }

  return (
    <div>
      {profile ? (
        <div className='row profS-main'>
          <div className='col-4'>
            <div className='profU-name row'>
              <img className='col-5 profU-img' src={`http://localhost:3000/${profile.data.image.filename}`} alt='profile' />
              <p className='col-5 profU-left1'>{profile.data.name}</p>
            </div>
            <div className='profU-name1'>
              <button className='profU-left' onClick={() => setPage(0)}>Profile</button>
            </div>
            <div className='profU-name1'>
              <button className='profU-left' onClick={() => { setPage(1); fetchAddress(); }}>Address</button>
            </div>
            <div className='profU-name1'>
              <p className='profU-left'>Help center ➡️</p>
            </div>
          </div>

          {page === 0 ? (
            <div className='col-7 profU-details'>
              <h3 className='profU-head'><b>DETAILS</b></h3>
              <hr />
              <div className='profU-body'>
                <p>Name: {profile.data.name}</p>
                <p>Mobile: {profile.data.number}</p>
                <p>Email: {profile.data.email}</p>
                <p>Gender: {profile.data.gender}</p>
              </div>
              <div>
                <button className='profU-edit'>
                  <Link className='Link-decoration' to='/ProfileeditUser'>EDIT</Link>
                </button>
              </div>
            </div>
          ) : page === 2 ? (
            <div className='profU-buying-main col-6'>
              <p>Edit ADDRESS</p>
              <input className='profU-buy-input' placeholder='Enter Name' name='name' value={editAddressData.name} onChange={handleEdit} required />
              <input className='profU-buy-input' placeholder='Mobile Number' name='number' value={editAddressData.number} onChange={handleEdit} required />
              <input className='profU-buy-input' placeholder='Pin Code' name='pin' value={editAddressData.pin} onChange={handleEdit} required />
              <input className='profU-buy-input' placeholder='City/District/Town' name='city' value={editAddressData.city} onChange={handleEdit} required />
              <input className='profU-buy-input' placeholder='State' name='state' value={editAddressData.state} onChange={handleEdit} required />
              <input className='profU-buy-input' placeholder='Landmark' name='landmark' value={editAddressData.landmark} onChange={handleEdit} required />
              <br />
              <button className='profU-buy-savebtn' onClick={editAddress}>SAVE</button>
            </div>
          ) : (
            <div className='profU-buying-main col-6'>
              <p>SAVED ADDRESS</p>
              <ul>
                {savedAddresses.length > 0 ? (
                  savedAddresses.map((addr, index) => (
                    <li key={index}>
                      <div className='profU-buying-main2'>
                        <p>Name: {addr.name}</p>
                        <p>Pin: {addr.pin}</p>
                        <p>Number: {addr.number}</p>
                        <p>City: {addr.city}</p>
                        <p>State: {addr.state}</p>
                        <p>Landmark: {addr.landmark}</p>
                        <button type='button' onClick={() => deleteAddress(addr._id)}>DELETE</button>
                        <button type='button' onClick={() => startEditAddress(addr)}>EDIT</button>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>No saved addresses</p>
                )}
              </ul>
              <hr />
              <p>NEW ADDRESS</p>
              <input className='profU-buy-input' placeholder='Enter Name' name='name' onChange={handleChange} required />
              <input className='profU-buy-input' placeholder='Mobile Number' name='number' onChange={handleChange} required />
              <input className='profU-buy-input' placeholder='Pin Code' name='pin' onChange={handleChange} required />
              <input className='profU-buy-input' placeholder='City/District/Town' name='city' onChange={handleChange} required />
              <input className='profU-buy-input' placeholder='State' name='state' onChange={handleChange} required />
              <input className='profU-buy-input' placeholder='Landmark' name='landmark' onChange={handleChange} required />
              <br />
              <button className='profU-buy-savebtn' onClick={saveAddress}>SAVE</button>
            </div>
          )}
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default ProfileUser;
