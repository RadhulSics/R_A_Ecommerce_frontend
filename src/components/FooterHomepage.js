import React from 'react'
import './FooterHomepage.css'
import { Link } from 'react-router-dom'

function FooterHomepage() {
  return (
    <div>
      <footer className='FooterHomepage-main'>
      <div >
        <div> 
          {/* <img className='footer-logo' src={Logo} alt='Logo-footer' /> */}
        </div>
        <div className='FooterHomepage-flex'>
          <div>
            <Link className='FooterHomepage-a' to='/'>Home</Link>
          </div>
          <div>
            <Link className='FooterHomepage-a'  to='/about'>About us</Link>
          </div>
          <div>
            <Link className='FooterHomepage-a'  to='#'>Gallery</Link>
          </div>
          <div>
            <Link className='FooterHomepage-a'  to='#'>Careers</Link>
          </div>
          <div>
            <Link className='FooterHomepage-a'  to='/contact'>Contact us</Link>
          </div>
        </div>
      </div>

      <div className='FooterHomepage-copyright'>
      <hr/>
      <h4 className='FooterHomepage-copyright-text'>Copyright © 2024 Store | Powered by SICS-KART</h4>
      </div>
      </footer>
    </div>
  )
}

export default FooterHomepage