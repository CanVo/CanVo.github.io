import React, {useEffect} from 'react';
import '../../../App.css';
import './Credits.css';
import Aos from 'aos';

function Credits () {
  
  useEffect (() => {
    Aos.init({duration: 800});
  }, []);

  return (
    <div className="credits-page">
      <div className='credits-body'
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      >
        <h1> Special Thanks </h1>
        <p> You (for willing to read my janky code and ramblings) </p>
        <p> The helpful individuals who were kind and answered questions I had on forums </p>
        <p> Coffee ☕ </p>

        <h1> Royalty Free Credit </h1>
        <p> 
          <a href="https://www.pexels.com/video/spooky-jack-o-lantern-computer-animation-9867271/">Home Hero Video by Uzunov Rostislav</a>
        </p>
        <p>
          <a href="https://icons8.com/icon/22190/jewel">Jewel Icon used for favicon.ico by Icons8</a>
        </p>
      </div>
    </div>
  );
}

export default Credits;