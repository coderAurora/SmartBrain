import React from "react";
import Particles from "react-tsparticles";
import options from './options';

const MyParticles = () => {
    const particlesInit = (main) => {
        console.log('particlesInit(main)', main);
    }
    const particlesLoaded = (container) => {
        console.log('partivlesLoaded(container)', container);
    }
    return (
        <Particles className={'particles'}
             options={options}
             init={particlesInit}
             loaded={particlesLoaded}
        />
    )
}
export default MyParticles;