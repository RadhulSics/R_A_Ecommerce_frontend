import React from 'react'
import './ProfeditUser.css'

function ProfeditUser() {
  return (
    <div>
      <div className='profeditU-main'>
        <div>
        <input className='profeditU-input'  type='text' placeholder='Username...' />
        </div> 
        <div>
        <input className='profeditU-input reg-number' type='number' placeholder='Phone number...'/>
        </div>
        <div>
        <input className='profeditU-input'  type='email' placeholder='Email...' />
        </div>
        <input className='profeditU-input'  type='password' placeholder='Password...' />
        <div>
        </div>
        <input className='profeditU-input'  type='date' placeholder='Date...' />
        <div>
          <label  className='profeditU-label'>Male</label>
          <input type='radio' name='gender' />
          <label  className='profeditU-label'>Female</label>
          <input type='radio' name='gender' />
        </div>

      <div >
        <button className='profeditU-button' >DONE</button>
      </div>
      </div>
    </div>
  )
}

export default ProfeditUser