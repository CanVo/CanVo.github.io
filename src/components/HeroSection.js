import React from 'react'
import { Button } from './Button'
import './HeroSection.css';
import '../App.css'
import heroVideo from '../assets/videos/pexels-rostislav-uzunov-9867271.mp4'


// <h2> BG Credit: Rostislav Uzunov</h2>
function HeroSection() {
  return (
    <div className='hero-container'>


      <video 
        autoPlay 
        loop 
        muted 
        id='hero-video'
      >
        <source src={heroVideo} type='video/mp4' />
      </video>
    </div>
  )
}

export default HeroSection