import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact />
        </Switch>
        <Button buttonStyle='btn--outline'>Sign Up</Button>
        <Form />
      </Router>
    </>
  );
}

export default App;
