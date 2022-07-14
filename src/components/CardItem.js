import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import Aos from 'aos';
import 'aos/dist/aos.css';

function CardItem(properties) {

  useEffect (() => {
    Aos.init({duration: 1500});
  }, []);

  /* Refer to AOS docs for the type of fades we can use: https://michalsnik.github.io/aos/ */
  /* Fades will be for the `data-aos=` field. */

  return (
    <>
      <li className="cards-item" data-aos={properties.fade}>

        <Link className="cards-item-link" to={properties.path}>

          <figure className={`cards-item-pic-wrap ${properties.tagColor}`} data-category={properties.label}>
            <img src={properties.src} alt="Travel Image" className="cards-item-img" />
          </figure>

          <div className="cards-item-info">
            <h5 className="cards-item-text">{properties.text}</h5>
          </div>

        </Link>
        
      </li>
    </>
  )
}

export default CardItem