import React, { useEffect } from 'react';
import CardItem from '../../CardItem'
import './ArticleCards.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

import testImage from '../../../assets/pictures/test.jpg'

function ArticleCards() {


  return (
    <div className='cards'>
      <h1> Some things I worked on while bored... </h1>

      <div className="cards-container" >
        <div className="cards-wrapper">
          {/* Add another `ul` section with cardItems in it if formatting is desired. Play around with it */}
          <ul className="cards-items">
            {/* This is where all the cards will go for future stuff.*/}
            {/* Modify this section if you ever add more stuff in */}
            <CardItem 
              src={testImage}
              text="Blah Blah Blah"
              label="Tag"
              path='/articles/article1'
              fade='zoom-in'
            />

            <CardItem 
              src={testImage}
              text="Blah Blah Blah"
              label="Tag"
              path='/articles/article2'
              fade='zoom-in'
            />

            <CardItem 
              src={testImage}
              text="Blah Blah Blah"
              label="Tag"
              path='/articles/article3'
              fade='zoom-in'
            />

          </ul>

          {/* Second ul section */}
          <ul>
            <CardItem 
              src={testImage}
              text="Blah Blah Blah"
              label="Tag"
              path='/articles/article4'
              fade='zoom-in'
            />

            <CardItem 
              src={testImage}
              text="Blah Blah Blah"
              label="Tag"
              path='/articles/article4'
              fade='zoom-in'
            />

            <CardItem 
              src={testImage}
              text="Blah Blah Blah"
              label="Tag"
              path='/articles/article4'
              fade='zoom-in'
            />

          </ul>
        </div>
      </div>

    </div>
  )
}

export default ArticleCards