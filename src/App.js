
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path="/" component={LandingPage}/>
          </Switch>
      </Router>
    </>
  );
}

export default App;