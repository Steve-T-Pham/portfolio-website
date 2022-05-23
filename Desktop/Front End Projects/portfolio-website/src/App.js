import React from 'react';
import Navigation from './components/Navigation.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe.js';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typed from 'typed.js';



function App() {

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <React.Fragment>      
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000",
          },
        },
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false
            },
            onHover: {
              enable: true,
              mode: "grab",
              parallax: {
                enable: true,
                force: 300,
                smooth: 10
              }
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 20,
              duration: 0.4,
            },
          },
          connect: {
            distance: 80,
            links: {
              color: "#ffffff",
              opacity: 1,
            },
            radius: 60
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "none",
          },
          size: {
            value: { min: 1, max: 5 },
          },
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1
              },
              value: 1
            },
        },
        detectRetina: true,
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      }}
      />
    <Header />
    <AboutMe />
    <Navigation />
    </React.Fragment>
  );
}

export default App;
