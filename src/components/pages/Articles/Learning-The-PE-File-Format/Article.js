import React from 'react';
import '../../../Article.css'
import QuoteBlock from '../../../QuoteBlock'
import DummyText from '../../../DummyText'

function LearningThePEFileFormat() {
  
  return (
    <div className="article-page">
      <div className="article-body"> 
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

        {/* Test */}
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