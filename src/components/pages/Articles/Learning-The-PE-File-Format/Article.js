import React, {useEffect} from 'react';
import '../../../Article.css'
import QuoteBlock from '../../../QuoteBlock'
import DummyText from '../../../DummyText'
import Aos from 'aos';
// https://stackoverflow.com/questions/54875497/how-do-you-increase-the-typewriter-effect-speed-and-increase-cursor-size
import TypeWriter from 'typewriter-effect';


function LearningThePEFileFormat() {
  
  // Specific fade in duration for this unique article
  useEffect (() => {
    Aos.init({duration: 2100});
  }, []);

  
  return (
    <div className="article-page">
        <div className="article-title">
          <TypeWriter 
            // Typewriter object options.
            options={{
              autoStart: true,
              delay: 30
            }}
            // TypeWriter object method calls.
            onInit={(typewriter) => {
              typewriter.typeString("Learning The PE File Format")
              .start();
            }}
          />
        </div>
      
      {/* Main article body and contents */}
      <div 
        className="article-body"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      > 

        <h2 id="background">
          Background
        </h2>
        <p>{DummyText}</p>
    
        <h2 id="disclaimer">
          Disclaimer
        </h2>
        <p>{DummyText}</p>

        <h2 id="Title1">
          Title 1
        </h2>
        <p>{DummyText}</p>

        <div className="article-image-container">
          <img src={'./assets/images/test/test2.jpg'} alt="pic1" />
        </div>

        <QuoteBlock
          quote={DummyText}
          quoter="Dennis"
        />
      </div>
    </div>
  )
}

export default LearningThePEFileFormat