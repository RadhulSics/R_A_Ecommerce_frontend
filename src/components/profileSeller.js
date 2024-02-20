import React from 'react'
import './login.css'
import profilepic from '../images/profileseller.jpg'
import { Link } from 'react-router-dom'

function ProfileSeller() {
  return (
    <div>
        <div className='row'>
      <div className='col-4'>
        <div className='profS-name row'>
        <img className='col-5 profS-img' src={profilepic} />
          <p className='col-5 profS-left1'>Prakash Menon</p>
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
        <div >
          <button className='profS-logout'>LOG OUT</button>
        </div>
      </div>

      <div className='col-7 profS-details'>
        <h3 className='profS-head'><b>DETAILS</b></h3>
        <hr/>
        <div className='profS-body'>
          <p>Name : Prakash Menon </p>
          <p>Mobile : 89xxxxx32</p>
          <p>Email : praxxx@gmail.com</p>
          <p>Gender : Male</p>
          <p>DOB : 11/02/1993</p>
        </div>
        <div>
          <button className='profS-edit'><Link className='Link-decoration' to='/profileeditSeller'> EDIT</Link></button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProfileSeller