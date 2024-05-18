import React from 'react'
import './ProfeditSeller.css'

function ProfeditSeller() {
  return (
    <div>
        <div className='profeditS-main'>
        <div>
        <input className='profeditS-input'  type='text' placeholder='Username...' />
        </div> 
        <div>
        <input className='profeditS-input reg-number' type='number' placeholder='Phone number...'/>
        </div>
        <div>
        <input className='profeditS-input'  type='email' placeholder='Email...' />
        </div>
        <input className='profeditS-input'  type='password' placeholder='Password...' />
        <div>
        </div>
        <input className='profeditS-input'  type='date' placeholder='Date...' />
        <div>
          <label  className='profeditS-label'>Male</label>
          <input type='radio' name='gender' />
          <label  className='profeditS-label'>Female</label>
          <input type='radio' name='gender' />
        </div>

      <div >
        <button className='profeditS-button' >DONE</button>
      </div>
      </div>
    </div>
  )
}

export default ProfeditSeller