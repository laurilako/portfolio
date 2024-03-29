import React from "react";
import Particles from "react-tsparticles";
import particlesConfigDark from "../config/particle-configDark";
import particlesConfigLight from "../config/particle-configLight";
import { useColorModeValue } from '@chakra-ui/react';

function ParticleBg(props) {
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };
  
  const particlesLoaded = (container) => {
    // console.log(container);
  };
  
  const config = useColorModeValue(particlesConfigLight, particlesConfigDark)

  return (
    (props.show ? 
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
    /> : <></>)
  );
};

export default ParticleBg