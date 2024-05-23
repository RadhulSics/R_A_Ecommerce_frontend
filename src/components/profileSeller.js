import React, { useEffect, useState } from 'react';
import './ProfileSeller.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileSeller() {
  const uid = localStorage.getItem("uid");
  const [profile, setProfile] = useState(null);

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

  return (
    <div>
      {profile ? (
        <div className='row profS-main'>
          <div className='col-4'>
            <div className='profS-name row'>
              {/* <h5 className='col-5 profS-welcome'>Welcome!</h5> */}
              <img className='col-5 profS-img' src={`http://localhost:3000/${profile.data.image.filename}`} alt='profile image' />
              <p className='col-5 profS-left1'>{profile.data.name}</p>
            </div>
            <div className='profS-name1'>
              <p className='profS-left'>CART ➡️</p>
            </div>
            <div className='profS-name1'>
              <p className='profS-left'>Warehouse ➡️</p>
            </div>
            <div className='profS-name1'>
              <p className='profS-left'>Help center ➡️</p>
            </div>
            <div>
              <button className='profS-logout'>LOG OUT</button>
            </div>
          </div>

          <div className='col-7 profS-details'>
            <h3 className='profS-head'><b>DETAILS</b></h3>
            <hr />
            <div className='profS-body'>
              <p>Name: {profile.data.name}</p>
              <p>Mobile: {profile.data.number}</p>
              <p>Email: {profile.data.email}</p>
              <p>Gender: {profile.data.gender}</p>
            </div>
            <div>
              <button className='profS-edit'>
                <Link className='Link-decoration' to='/profileeditSeller'>EDIT</Link>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default ProfileSeller;
