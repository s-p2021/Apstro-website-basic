import React from 'react'

import './Form.css';
// import Button from './Button.js'

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
        <div className="form-container">
          <h1 class="title">What would you like to see on Apstro?</h1>
          <form onSubmit={() => {}} class="form">
            <div className='input-line'>
              <label class="label">
                Name: 
                <input 
                  type='text'
                  class="input-container"
                />
              </label>
            </div>
            <div className='label-line'>
              <label class="label">
                Email: 
                <input 
                  type='text'
                  name='email'
                  class="input-container"
                />
              </label>
            </div>
            <label class="label">
              Your feedback: 
              <input 
                type='text'
                name='feedback'
                class="input-container"
              />
            </label>
            {/* <Button title='submit'/> */}
          </form>
        </div>
      </>
    )
  }
}

export default Form
