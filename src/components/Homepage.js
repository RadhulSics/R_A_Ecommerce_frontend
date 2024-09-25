import React from 'react'
import './Homepage.css'
import image1 from '../images/hp10.jpg'
import image2 from '../images/hp9.jpg'
import image3 from '../images/hp8.jpg'
import image4 from '../images/hp7.jpg'
import watchimg from '../images/hp3.jpg'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate()
    const login=()=>{
        navigate('/Customerlogin')
    }
    return (
        <div>
            <div>
                <div className='HomePage-backgroundimg'>
                    <h4 className='HomePage-text1'>CASUAL & EVERYDAY</h4>
                    <h1 className='HomePage-text2'>Effortlessly Blend Comfort & Style!</h1>
                    <h3 className='HomePage-text3'>Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</h3>
                </div>
                <div>
                    <button type='submit' className='HomePage-button' onClick={login}>EXPLORE</button>
                </div>
                <div>
                    <h3 className='HomePage-text4'>Most popular !</h3>
                </div>
                <div className='HomePage-image-flex'>
                    <div>
                        <img className='HomePage-popular-img' src={image1} alt='' />
                    </div>
                    <div>
                        <img className='HomePage-popular-img' src={image2} alt='' />
                    </div>
                    <div>
                        <img className='HomePage-popular-img' src={image3} alt='' />
                    </div>
                    <div>
                        <img className='HomePage-popular-img' src={image4} alt='' />
                    </div>

                </div>


                <div>
                    <h3 className='HomePage-text5'>Explore Our Exquisite Watch Collection Now !</h3>
                    <img className='HomePage-watch-img' src={watchimg} alt='image' />
                </div>

                <div className='HomePage-icons-desc' >
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





            </div>
        </div>
    )
}

export default Homepage