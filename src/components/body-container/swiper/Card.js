import React from 'react'
import "./productSlider.css";




function Card(props) {
  return(
    <div className="card">
      <img className='sliderImg' src={ props.imgUrl } 
        alt={ props.alt || 'Image' } />
    </div>
  )
};
export default Card;