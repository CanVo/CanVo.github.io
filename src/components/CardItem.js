import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(properties) {
  return (
    <>
      <li className="cards-item">
        <Link className="cards-item-link" to={properties.path}>
          <figure className="cards-item-pic-wrap" data-category={properties.label}>
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