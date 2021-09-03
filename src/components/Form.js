import React from 'react'
import Button from './Button'

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
          <h1>What would you like to see on Apstro?</h1>
          <form onSubmit={() => {}}>
            <label>
              Name: 
              <input 
                type='text'
              />
            </label>
            <label>
              Email: 
              <input 
                type='text'
                name='email'
              />
            </label>
            <label>
              Your feedback: 
              <input 
                type='text'
                name='feedback'
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
