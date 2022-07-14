import React from 'react';
import '../../../App.css';
import CardItem from '../../CardItem';
import './ArticleHub.css'

// I should probably make the component first then just simply import it here rather than developing it all here...
// Refer to how Home.js is set up where it just imports and uses the Hero video...

function Articles () {
  return (
    <>
    <div className='article-hub-page'>
      <div className="cards-container" >
        <div className="cards-wrapper">
          {/* This will be where the top 3 featured articles will reside on top of page */}
          <h1 className="featured-header"> Featured Articles </h1>
          <div className = "cards-items-featured-articles">
            <ul>
              {/* Modify this section if you ever add more stuff in */}
              <CardItem 
                src='./assets/images/article-images/Learning-The-PE-File-Format/thumbnail.jpg'
                text="Learning the PE File Format"
                label="Windows"
                tagColor="blue"
                path='/articles/learning-the-pe-file-format'
                fade='zoom-in'
              />

              <CardItem 
                src='./assets/images/article-images/Traditional-DLL-Injection/thumbnail.jpg'
                text="Traditional DLL Injection"
                label="Windows"
                tagColor="blue"
                path='/articles/traditional-dll-injection'
                fade='zoom-in'
              />

              <CardItem 
                src='./assets/images/article-images/VA-RVA-And-FileOffsets/thumbnail.jpg'
                text="VA, RVA and File Offsets"
                label="Reverse Engineering"
                tagColor="red"
                path='/articles/va-rva-and-file-offsets'
                fade='zoom-in'
              />
              
            </ul>
          </div>


          <h1 className="main-articles-header"> Other stuff I worked on while bored...</h1>
          {/* Second ul section where main articles will reside. Consider placing in inverse order of date publication (oldest at bottom) */}
          <div className="cards-items-main-articles">
            <div className="article">
                <CardItem
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah1"
                  label="Tag"
                  path='/articles/article4'
                  fade='zoom-in'
                />
              </div>

              <div className="article">
                <CardItem 
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah2"
                  label="Tag"
                  path='/articles/article5'
                  fade='zoom-in'
                />
              </div>

              <div className="article">
                <CardItem 
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah3"
                  label="Tag"
                  path='/articles/article6'
                  fade='zoom-in'
                />
              </div>

              <div className="article">
                <CardItem 
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah4"
                  label="Tag"
                  path='/articles/article7'
                  fade='zoom-in'
                />
              </div>

              <div className="article">
                <CardItem 
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah5"
                  label="Tag"
                  path='/articles/article8'
                  fade='zoom-in'
                />
              </div>

              <div className="article">
                <CardItem 
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah6"
                  label="Tag"
                  path='/articles/article9'
                  fade='zoom-in'
                />
              </div>

              <div className="article">
                <CardItem 
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah7"
                  label="Tag"
                  path='/articles/article10'
                  fade='zoom-in'
                />
              </div>

              <div className="article">
                <CardItem 
                  className="article"
                  src='./assets/images/test/test.jpg'
                  text="Blah Blah Blah8"
                  label="Tag"
                  path='/articles/article11'
                  fade='zoom-in'
                />
              </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Articles;