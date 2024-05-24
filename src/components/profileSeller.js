import React, { useEffect, useState } from 'react';
import './ProfileSeller.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProfileSeller() {
  const sid = localStorage.getItem("sid");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = () => {
    axios.post(`http://localhost:3000/viewSeller/${sid}`)
      .then(response => {
        setProfile(response.data);
        console.log(response.data);
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
              <img className='col-5 profS-img' src={`http://localhost:3000/${profile.image.filename}`} alt='profile image' />

            
              <p className='col-5 profS-left1'>{profile.name}</p>
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
           
          </div>

          <div className='col-7 profS-details'>
            <h3 className='profS-head'><b>DETAILS</b></h3>
            <hr />
            <div className='profS-body'>
              <p>Name: {profile.name}</p>
              <p>Mobile: {profile.number}</p>
              <p>Email: {profile.email}</p>
              <p>Gender: {profile.gender}</p>
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
