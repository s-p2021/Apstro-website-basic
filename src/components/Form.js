import React from 'react'
import Button from './Button'

import './Form.css';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      feedback: ''
    }
  }
  
  render() {
    return (
      <>
        <div>
          <h1 class="title">What would you like to see on Apstro?</h1>
          <form onSubmit={() => {}} class="form">
            <label class="label">
              Name: 
              <input 
                type='text'
                class="input-container"
              />
            </label>
            <label class="label">
              Email: 
              <input 
                type='text'
                name='email'
                class="input-container"
              />
            </label>
            <label class="label">
              Your feedback: 
              <input 
                type='text'
                name='feedback'
                class="input-container"
              />
            </label>
            <Button title='Submit'/>
          </form>
        </div>
      </>
    )
  }
}

export default Form
