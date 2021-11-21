import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import DownloadPage from './pages/DownloadPage';
import FeedbackPage from './pages/FeedbackPage';
import ContactUsPage from './pages/ContactUsPage';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <Switch> */}
          <Route path="/home" exact component={LandingPage}/>
          <Route path="/about" exact component={AboutPage}/>
          <Route path="/download" exact component={DownloadPage}/>
          <Route path="/feedback" exact component={FeedbackPage}/>
          <Route path="/contactus" exact component={ContactUsPage}/>
        {/* </Switch> */}
      </Router>
    </>
  );
}

export default App;
