import React from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
        <Nav />
        <Hero />
    </Router>
  );
}

export default App;