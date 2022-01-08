import React, { useState, useReducer, useCallback } from 'react';
import { set } from 'react-ga';
import Background from '../../../components/appComponents/Background';
import MyInput from '../../../components/appComponents/MyInput'
import styled from 'styled-components';

const SignUpScreen = props => {
  const [isSignUp, setIsSignUp] = useState(false)


  return (
    <div>
      <Background>
        <div>
          <h1>{isSignUp ? 'Welcome to Apstro' : 
            'Please sign in'}</h1>
          <button
            onClick={(e) =>setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Already have an account? login' : 
              "New to Apstro? Sign up"}
          </button>
          <form>
            <label>
              Email:
              <input 
                type='text'
              />
            </label>
            <label>
              Password:
              <input 
                type='password'
              />
            </label>
            <button
              type='submit'
            >
              {isSignUp ? 'Sign Up' : 'Login'}
            </button>
          </form>
        </div>
      </Background>
    </div>
  )
}

export default SignUpScreen