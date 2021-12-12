import React from 'react';
import Nav from './components/Nav'
import Hero from './components/Hero'
import ParticleBg from './components/ParticleBg';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <ParticleBg />
      </div>
      <Router>
        <Nav />
        <Hero />
      </Router>
    </>
  );
}

export default App;