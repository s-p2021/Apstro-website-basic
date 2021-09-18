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
        <Switch>
          <Route path='/' exact />
        </Switch>
        <LandingPage />
        <AboutPage />
        <DownloadPage />
        <FeedbackPage />
        <ContactUsPage />
      </Router>
    </>
  );
}

export default App;
