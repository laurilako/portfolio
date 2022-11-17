import React from "react";
import Particles from "react-tsparticles";
import particlesConfigDark from "../config/particle-configDark";
import particlesConfigLight from "../config/particle-configLight";
import { useColorModeValue } from '@chakra-ui/react';
import { useCallback } from "react";
import { loadFull } from "tsparticles";

function ParticleBg(props) {

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);
  
  const particlesLoaded = useCallback(async container => {
      await console.log(container);
    }, []);
  
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