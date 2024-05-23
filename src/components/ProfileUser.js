import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import profilepic from '../images/profileseller.jpg';
import { Link } from 'react-router-dom';
import './ProfileUser.css';
import axios from 'axios';

function ProfileUser() {
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
  console.log(profile);

  return (
    <div>
      {profile ? (
        <div className='row'>
          <div className='col-4'>
            <div className='profU-name row'>
              {/* <h5 className='col-5 profU-welcome'> Welcome ! </h5> */}
              <img className='col-5 profU-img' src={`http://localhost:3000/${profile.data.image.filename}`} alt='profile image' />

              <p className='col-5 profU-left1'>{profile.data.name}</p>
            </div>
            <div className='profU-name1'>
              <p className='profU-left'>Products ➡️</p>
            </div>
            <div className='profU-name1'>
              <p className='profU-left'>Warehouse ➡️</p>
            </div>
            <div className='profU-name1'>
              <p className='profU-left'>Help center ➡️</p>
            </div>
            <div>
              <button className='profU-logout'>LOG OUT</button>
            </div>
          </div>

          <div className='col-7 profU-details'>
            <h3 className='profU-head'><b>DETAILS</b></h3>
            <hr/>
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
        </div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default ProfileUser;
