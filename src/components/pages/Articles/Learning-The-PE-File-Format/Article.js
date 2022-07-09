import React from 'react';
import '../../../Article.css'
import QuoteBlock from '../../../QuoteBlock'
import DummyText from '../../../DummyText'

function LearningThePEFileFormat() {
  
  return (
    <div className="article-page">
      <div className="article-body"> 
        <main>
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
            <img src={'./assets/images/test/test.jpg'} alt="pic1" />
          </div>

          <QuoteBlock
            quote={DummyText}
            quoter="Dennis"
          />
      
          <h2 id="Title2">
            Title 2
          </h2>
          <p>{DummyText}</p>

          <h2 id="Title3">
            Title 3
          </h2>
          <p>{DummyText}</p>
      
          <h2 id="Title4">
            Title 4
          </h2>
          <p>{DummyText}</p>

          <h2 id="Title5">
            Title 5
          </h2>
          <p>{DummyText}</p>
      
          <h2 id="Title6">
            Title 6
          </h2>
          <p>{DummyText}</p>

          <h2 id="Title7">
            Title 4
          </h2>
          <p>{DummyText}</p>

          <h2 id="Title8">
            Title 5
          </h2>
          <p>{DummyText}</p>
      
          <h2 id="Title9">
            Title 6
          </h2>
          <p>{DummyText}</p>

          <h2 id="Title10">
            Title 4
          </h2>
          <p>{DummyText}</p>

          <h2 id="Title11">
            Title 5
          </h2>
          <p>{DummyText}</p>
      
          <h2 id="Title 12">
            Title 6
          </h2>
          <p>{DummyText}</p>


        </main>
      </div>
    </div>
  )
}

export default LearningThePEFileFormat