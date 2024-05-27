import React, { useEffect, useState } from 'react'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom';
import scrollToTopIcon from '../images/scrollToTop.png'; 
function AboutUs() {
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
       <div className='AboutUs-background1'>   
          <h1 className='AboutUs-text1'>AboutUs</h1>
      </div>
        <div className='AboutUs-background2'>
          <div className='AboutUs-background2-flex'>
          <div>
            <h1 className='AboutUs-text2'>From Vision To Vogue: The Birth Of SICS-kart</h1>
          </div>
          <div className='AboutUs-text-box'>
            <h6 className='AboutUs-text3'>OUR STORY</h6>
            <h4 className='AboutUs-text4'>Our Journey Began With A Simple Yet Powerful Vision - To Redefine The Way people Experience Fashion.</h4>
            <p className='AboutUs-text5'>Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.</p>
          </div>

          </div>
         
        
            <div>
            <hr/>
            <div  className='AboutUs-text-box2'>
              <h6 className='AboutUs-text6'>QUALITY ASSURANCE</h6>
              <h4 className='AboutUs-text7'>We Understand That Fashion Is An Expression Of Identity, And We Take Pride In Delivering Products That Embody The Highest Standards Of Quality.</h4>
              <p className='AboutUs-text8'>Our journey to excellence begins with meticulous sourcing, where we carefully select materials that meet our stringent criteria for durability, comfort, and style. Every garment is crafted with precision in our state-of-the-art manufacturing facilities, ensuring attention to detail at every stitch. Our commitment to quality doesn't end there rigorous quality control processes guarantee that each piece meets our exacting standards before it finds its way to your wardrobe. Trust in FemmeWardrobe for fashion that not only captures attention but withstands the test of time.</p>
            </div>
            
            </div>
         </div>

         <div className='AboutUs-background3'>
          <div  className='AboutUs-text-box3'>
                <h6 className='AboutUs-text9'>CUSTOMER-CENTRIC APPROACH</h6>
                <h4 className='AboutUs-text10'>Beyond Fashion: Nurturing A Customer-Centric Experience</h4>
                <p className='AboutUs-text11'>We believe that the essence of our success lies in the satisfaction of our customers. Our commitment to providing an exceptional shopping experience goes beyond trends and styles – it's about understanding and meeting the unique needs of every individual who chooses FemmeWardrobe. From personalized recommendations to hassle-free returns, we've crafted every aspect of our service with you in mind. Our dedicated customer support team is here to ensure your journey with us is seamless, enjoyable, and exceeds your expectations. Join our community of empowered fashion enthusiasts, where your satisfaction is not just a priority; it's our passion.</p>
              </div>
         </div>

         <div className='AboutUs-background4'>
         <div  className='AboutUs-text-box4'>
                <h6 className='AboutUs-text12'>SUSTAINABILITY INITIATIVES</h6>
                <h4 className='AboutUs-text13'>Conscious Fashion For A Better Tomorrow</h4>
                <div  className='AboutUs-text-box-flex'>
                  <h4 className='AboutUs-text14'>We Understand That Fashion Is An Expression Of Identity, And We Take Pride In Delivering Products That Embody The Highest Standards Of Quality.</h4>

                <p className='AboutUs-text15'>Our journey to excellence begins with meticulous sourcing, where we carefully select materials that meet our stringent criteria for durability, comfort, and style. Every garment is crafted with precision in our state-of-the-art manufacturing facilities, ensuring attention to detail at every stitch. Our commitment to quality doesn't end there rigorous quality control processes guarantee that each piece meets our exacting standards before it finds its way to your wardrobe. Trust in FemmeWardrobe for fashion that not only captures attention but withstands the test of time.</p>
                </div>
          </div>
         </div>

         <div className='AboutUs-background5'>
        <div className='AboutUs-tamanna-box'>
          <h3 className='AboutUs-text16'>Elevate Your Wardrobe, Embrace Timeless Style!</h3>
          <p className='AboutUs-text17'>Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!</p>
          <button className='AboutUs-shopnow-btn'  onClick={login}>SHOP NOW</button>
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

export default AboutUs