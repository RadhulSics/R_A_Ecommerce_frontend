import React, { useState, useEffect } from 'react';
import './HomePage.css';
import popuarImg1 from '../images/hp10.jpg';
import popuarImg2 from '../images/hp7.jpg';
import popuarImg3 from '../images/hp8.jpg';
import popuarImg4 from '../images/hp9.jpg';
import watchImg from '../images/hp4.jpg';
import hrithik from '../images/hp2.jpg';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import scrollToTopIcon from '../images/scrollToTop.png'; 
import { useNavigate } from 'react-router-dom';

function HomePage() {
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
    <div className='scroller-snap'>
      <div className='HomePage-background1'>
        <div>
          <h5 className='HomePage-text1'>CASUAL & EVERYDAY</h5>
          <h1 className='HomePage-text2'>Effortlessly Blend Comfort & Style!</h1>
          <h3 className='HomePage-text4'>Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</h3>
        </div>
        <div>
          <button type='submit' className='HomePage-buttons' onClick={login}>EXPLORE</button>
        </div>
      </div>

      <div className='HomePage-background2'>
        <h3 className='HomePage-text3'>Most popular !</h3>
        <div className='HomePage-popular-flex'>
          <div>
            <img className='HomePage-popular-img' src={popuarImg1} alt='image' />
          </div>
          <div>
            <img className='HomePage-popular-img' src={popuarImg2} alt='image' />
          </div>
          <div>
            <img className='HomePage-popular-img' src={popuarImg3} alt='image' />
          </div>
          <div>
            <img className='HomePage-popular-img' src={popuarImg4} alt='image' />
          </div>
        </div>
      </div>

      <div className='HomePage-background3'>
        <img className='HomePage-watch-img' src={watchImg} alt='image' />
        <h3 className='HomePage-text5'>Explore Our Exquisite Watch Collection Now !</h3>
      </div>

      <div className='HomePage-background4'>
        <div className='HomePage-weddingtext-box'>
          <h6>WEDDING ELEGANCE COLLECTION</h6>
          <h3 className='HomePage-text6'>Elegant Wedding Attire Collection</h3>
          <p className='HomePage-text7'>Step into a world of timeless elegance with our Elegant Wedding Attire Collection. Perfectly crafted to celebrate love and commitment, each piece combines classic sophistication with contemporary style, ensuring you look and feel your best on your special day.</p>
          <button className='HomePage-shopnow-btn'  onClick={login}>SHOP NOW</button>
        </div>
      </div>

      <div className='HomePage-background5'>
        <img className='HomePage-hrithik-img' src={hrithik} alt='image' />
        <h1 className='HomePage-text8'>Discover The Allure Of Fashion Reinvented!</h1>
        <h6 className='HomePage-text9'>Dive into a world of style with our latest collection! Shop now and redefine your wardrobe narrative!</h6>
      </div>

      <div className='HomePage-background6'>
        <div>
          <img className='HomePage-icon1' src={icon4} alt='image' />
          <h2 className='HomePage-icon-text'>Secure Payments</h2>
          <p className='HomePage-icon-description'>Shop with confidence knowing that your transactions are safeguarded.</p>
        </div>
        <div>
          <img className='HomePage-icon1' src={icon3} alt='image' />
          <h2 className='HomePage-icon-text'>Free Shipping</h2>
          <p className='HomePage-icon-description'>Shopping with no extra charges savor the liberty of complimentary shipping on every order.</p>
        </div>
        <div>
          <img className='HomePage-icon1' src={icon2} alt='image' />
          <h2 className='HomePage-icon-text'>Easy Returns</h2>
          <p className='HomePage-icon-description'>With our hassle-free Easy Returns, changing your mind has never been more convenient.</p>
        </div>
        <div>
          <img className='HomePage-icon1' src={icon1} alt='image' />
          <h2 className='HomePage-icon-text'>Order Tracking</h2>
          <p className='HomePage-icon-description'>Stay in the loop with our Order Tracking feature – from checkout to your doorstep.</p>
        </div>
      </div>

      <div className='HomePage-background7'>
        <div className='HomePage-tamanna-box'>
          <h3 className='HomePage-text10'>Elevate Your Wardrobe, Embrace Timeless Style!</h3>
          <p className='HomePage-text11'>Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!</p>
          <button className='HomePage-shopnow-btn2'  onClick={login}>SHOP NOW</button>
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
  );
}

export default HomePage;
