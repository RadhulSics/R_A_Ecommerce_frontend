import React from 'react'
import './ContactUs.css'


function ContactUs() {
   
  return (
    <div>
        <div className='ContactUs-background1'>
          <h3 className='ContactUs-text1'>Contact Us</h3>
      </div>

      <div className='ContactUs-background2'>
       <div  className='ContactUs-text-box1'>
              <h6 className='ContactUs-text2'>GET IN TOUCH</h6>
              <h4 className='ContactUs-text3'>We Value The Connection With Our Community And Are Here To Assist In Any Way We Can. Feel Free To Reach Out Through The Following Channels:</h4>
      </div>

      <div className='ContactUs-form-flex'>
        <form>
          <input className='ContactUs-form-input form-control' placeholder='NAME'/><br/>
          <input className='ContactUs-form-input form-control' placeholder='EMAIL'/><br/>
          <textarea className=' ContactUs-form-input form-control' rows="6" cols="84"placeholder='MESSAGE'/><br/>
          <button className='ContactUs-form-btn'>SEND</button>
        </form>

        <div>
          <label className='ContactUs-label'>PHONE</label>
          <p className='ContactUs-data'>(+91)9862565371</p>
          <label className='ContactUs-label'>EMAIL</label>
          <p className='ContactUs-data'>sics.kart@yahoo.in</p>
          <label className='ContactUs-label'>ADDRESS</label>
          <p className='ContactUs-data'>Technopark campus Thiruvananthapuram , Kazhakoottam</p>
        </div>
      </div>

      </div>
    </div>
  )
}

export default ContactUs