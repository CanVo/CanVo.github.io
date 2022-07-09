import React from 'react'
import './QuoteBlock.css'

function QuoteBlock(properties) {
  return (
    <div className='otro-blockquote'>
      <p>
        {properties.quote}
        <span>{properties.quoter}</span>
      </p>
      
    </div>


  )
}

export default QuoteBlock