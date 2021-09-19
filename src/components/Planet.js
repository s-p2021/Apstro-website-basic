import React from 'react';
import './Planet.css'

function Planet(props) {
  return (
    <>
      <div className='container'>
        <img src={props.image} alt='planet' className='image'/>
        {props.title && <h2 className='planetTitle'>{props.title}</h2>}
        {props.paragraph && <p className='paragraph'>{props.paragraph}</p>}
      </div>
    </>
  )
}

export default Planet;