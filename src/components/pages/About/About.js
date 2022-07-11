import React, { useEffect } from 'react'
import '../../../App.css'
import './About.css'
/* Import fade library for elements */
import Aos from 'aos';



function About () {

  useEffect (() => {
    Aos.init({duration: 1500});
  }, []);


  return (
    <div className="about-page">
      <div className="about-body">
        
        <div className="about-image-container" 
          data-aos="flip-right"
          data-aos-delay="200"
          data-aos-duration="1000"
          >
          <img src={'./assets/images/about/profile-picture.jpg'} alt="pic1" />
        </div>

        <div className="about-sections"
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-offset="0"
        >
          <div className="about-section">
            <h1>
              About Me
            </h1>
            <p> Security professional who's just trying to get better everyday. </p>
            <p> My main interests include: </p>
            <ul>
              <li> 
                Anti-Cheats
              </li>
              <li> 
                Reverse Engineering
              </li> 
              <li>
                Windows
              </li>
              <li>
                General Security
              </li>
            </ul>
            
          </div>

          <div className="about-section">
            <h1>
              About The Blog
            </h1>
            <p>
              I wanted a place to jot down and publish some notes of things I've worked on and have researched.</p>
            <p>  
              Additionally, I wanted to share some knowledge with others with the areas I am interested in.
            </p>
          </div>

          <div className="about-section">
            <h1>
              Blog Disclaimer
            </h1>
            <p> Any views or opinions represented throughout this blog are personal and belong solely to me. </p>
            <p> All content provided on this blog is for informational and educational purposes only. </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default About;