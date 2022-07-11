import React, {useEffect} from 'react';
import '../../../Article.css'
import QuoteBlock from '../../../QuoteBlock'
import DummyText from '../../../DummyText'
import Aos from 'aos';


function LearningThePEFileFormat() {
  useEffect (() => {
    Aos.init({duration: 800});
  }, []);
  
  return (
    <div className="article-page">
      <div 
        className="article-body"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-offset="0"
      > 

        <h1 className="article-title">
          Learning the PE File Format
        </h1>
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