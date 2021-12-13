import React from 'react';
import theme from './theme';
import Nav from './components/Nav';
import Home from './components/Home';
import Projects from './components/Projects';
import ParticleBg from './components/ParticleBg';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <ParticleBg />
        <Nav />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;