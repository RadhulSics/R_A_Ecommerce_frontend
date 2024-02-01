import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import img1 from '../images/person.png'

function ProfileUser() {
  return (
    <div className='row'>
      <div className='col-4'>
        <div className='profU-name row'>
        <img className='col-4 profU-img' src={img1} />
          <p className='col-8 profU-left1'>Robin Abraham</p>
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
        <div >
          <button className='profU-logout'>LOG OUT</button>
        </div>
      </div>

      <div className='col-7 profU-details'>
        <h3 className='profU-head'><b>DETAILS</b></h3>
        <hr/>
        <div className='profU-body'>
          <p>Name : Robin Abraham</p>
          <p>Mobile : 89xxxxx32</p>
          <p>Email : robxxx@gmail.com</p>
          <p>Gender : Male</p>
          <p>DOB : 02/02/2001</p>
        </div>
        <div>
          <button className='profU-edit'>EDIT</button>
        </div>
      </div>
    </div>
  )
}

export default ProfileUser