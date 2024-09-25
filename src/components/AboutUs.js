import React from 'react'
import './AboutUs.css'
import { useNavigate } from 'react-router-dom';

function AboutUs() {
    const navigate = useNavigate()
    const login = () => {
        navigate('/Customerlogin')
      }
    return (
        <div>
            <div className='AboutUs-background1'>
                <h1 className='AboutUs-text1'>AboutUs</h1>
                <div>
                <h2 className='AboutUs-text2'>From Vision To Vogue: The Birth Of SICS-kart</h2>
           
            </div>
           
             <div>
                <h4 className='AboutUs-text4'>Our Journey Began With A Simple Yet Powerful Vision - To Redefine The Way people Experience Fashion.</h4>
                <p className='AboutUs-text5'>Fueled by a passion for style and a commitment to individuality, we embarked on a mission to curate a collection that speaks to the diverse tastes and personalities of our cherished customers. From our humble beginnings to the vibrant online space we inhabit today, each milestone represents a chapter in our story. Join us on this fashion-forward adventure, where every piece tells a tale of inspiration, dedication, and sartorial elegance.</p>
          
            </div>
            <div>
                <h3 className='AboutUs-text16'>Elevate Your Wardrobe, Embrace Timeless Style!</h3>
                <p className='AboutUs-text17'>Explore our collections today and experience the joy of fashion. Shop now for the epitome of chic sophistication!</p>
            </div>
            <div>
            <button className='AboutUs-shopnow-btn' onClick={login}>SHOP NOW</button>
            </div>
            </div>

        <div>

        </div> 










        </div>
    )
}

export default AboutUs