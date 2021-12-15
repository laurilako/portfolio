import React from 'react';
import theme from './theme';
import Home from './components/Home';
import Resume from './components/Resume';
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
        <Routes>
          <Route exact path='/portfolio/' element={<Home />} />
          <Route exact path='/portfolio/resume' element={<Resume />} />
          <Route exact path='/portfolio/projects/' element={<Projects />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;