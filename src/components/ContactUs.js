import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './ContactUs.css'
import scrollToTopIcon from '../images/scrollToTop.png'; 
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';

function ContactUs() {

  const [showScroll, setShowScroll] = useState(false);
  const navigate = useNavigate()
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll]);

  const login =()=>{
    navigate('/login')
  }
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
          <input className='ContactUs-form-input' placeholder='NAME'/><br/>
          <input className='ContactUs-form-input' placeholder='EMAIL'/><br/>
          <textarea rows="6" cols="84"placeholder='MESSAGE'/><br/>
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

      <div className='ContactUs-background3'>
          <div  className='ContactUs-text-box2'>
                <h6 className='ContactUs-text4'>CUSTOMER-CENTRIC APPROACH</h6>
                <h4 className='ContactUs-text5'>Beyond Fashion: Nurturing A Customer-Centric Experience</h4>
                <p className='ContactUs-text6'>We believe that the essence of our success lies in the satisfaction of our customers. Our commitment to providing an exceptional shopping experience goes beyond trends and styles – it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. From personalized recommendations to hassle-free returns, we've crafted every aspect of our service with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your satisfaction is not just a priority; it's our passion.</p>
              </div>
         </div>

      <div className='ContactUs-background4'>
        <div>
          <img className='ContactUs-icon1' src={icon4} alt='image' />
          <h2 className='ContactUs-icon-text'>Secure Payments</h2>
          <p className='ContactUs-icon-description'>Shop with confidence knowing that your transactions are safeguarded.</p>
        </div>
        <div>
          <img className='ContactUs-icon1' src={icon3} alt='image' />
          <h2 className='ContactUs-icon-text'>Free Shipping</h2>
          <p className='ContactUs-icon-description'>Shopping with no extra charges savor the liberty of complimentary shipping on every order.</p>
        </div>
        <div>
          <img className='ContactUs-icon1' src={icon2} alt='image' />
          <h2 className='ContactUs-icon-text'>Easy Returns</h2>
          <p className='ContactUs-icon-description'>With our hassle-free Easy Returns, changing your mind has never been more convenient.</p>
        </div>
        <div>
          <img className='ContactUs-icon1' src={icon1} alt='image' />
          <h2 className='ContactUs-icon-text'>Order Tracking</h2>
          <p className='ContactUs-icon-description'>Stay in the loop with our Order Tracking feature – from checkout to your doorstep.</p>
        </div>
      </div>

      <div className='ContactUs-background5'>
        <div className='ContactUs-tamanna-box'>
          <h3 className='ContactUs-text7'>Elevate Your Wardrobe, Embrace Timeless Style!</h3>
          <p className='ContactUs-text8'>Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!</p>
          <button className='ContactUs-shopnow-btn2'  onClick={login}>SHOP NOW</button>
        </div>
      </div>

      <button
        className='scrollToTop'
        onClick={scrollTop}
        style={{ display: showScroll ? 'flex' : 'none' }}
      >
        <img src={scrollToTopIcon} alt="Scroll to top" />
      </button>
    </div>
  )
}

export default ContactUs