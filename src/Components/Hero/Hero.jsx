import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export default function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
            <div>
                <div className="hero-hand-icon">
                    <p>Hello&nbsp;&nbsp;</p>
                    <img src={hand_icon} alt=''></img>
                </div>
                <p>New Collections</p>
                <p>For EVERYONE</p>
            </div>
            <h6>Get ready to celebrate this festive season with upto <span className='discount'><b>50%</b> </span>discounts</h6>
            <div className="hero-latest-btn">
            <div>Latest collection</div>
            <img src={arrow_icon}/>        
        </div>
        </div>
        
        <div className="hero-right">
            <img src={hero_image}/>
        </div>
      
    </div>
  )
}
