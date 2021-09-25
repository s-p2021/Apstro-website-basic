import React from 'react';

import './Button.css'

function Button(props) {
  return(
    <>
      <div>
        <Button 
          onClick={props.onClick}
        >
          {props.title}
        </Button>
      </div>
    </>
  )
}

export default Button; 