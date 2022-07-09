import React from 'react'
import './HeroSection.css';
import '../App.css'

function HeroSection() {
  return (
    <div className='hero-container'>
      <video 
        autoPlay 
        loop 
        muted 
        id='hero-video'
      >
        <source src='./assets/videos/pexels-rostislav-uzunov-9867271.mp4' type='video/mp4' />
      </video>
    </div>
  )
}

export default HeroSection