import React, { useState } from 'react';
import theme from './theme';
// import Home from './components/Home';
import Home2 from './components/HomeNoImage';
import Resume from './components/Resume';
import ParticleBg from './components/ParticleBg';
import Projects from './components/Projects';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  const [show, setShow] = useState(true)
  function handleClick(){
    setShow(!show);
  }
  return (
    <Router>
      <ChakraProvider theme={theme}>
        <ParticleBg show={show} />
        <Routes>
          <Route exact path='/portfolio/' element={<Home2 handleClick={handleClick}/>} />
          <Route exact path='/portfolio/resume' element={<Resume />} />
          <Route exact path='/portfolio/projects/' element={<Projects />} />
        </Routes>
      </ChakraProvider>
    </Router>
  );
}

export default App;