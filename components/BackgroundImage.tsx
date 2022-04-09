import React from 'react'
import { motion, useMotionValue } from 'framer-motion'
import Particles from 'react-tsparticles'

const BackgroundImage = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0,
        },
        background: {
          image: '',
          position: '50% 50%',
          repeat: 'no-repeat',
          size: 'cover',
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 1,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 800,
              duration: 1,
            },
          },
        },
        particles: {
          color: {
            value: '#ffffff',
          },
          zIndex: {
            value: -1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          rotate: {
            value: {
              min: 0,
              max: 360,
            },
            animation: {
              enable: true,
              speed: 1,
              sync: true,
            },
          },
          number: {
            value: 1,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'image',
            image: {
              src: 'https://particles.js.org/images/cyan_amongus.png',
              width: 500,
              height: 634,
            },
          },
          size: { value: 40 },
        },
        detectRetina: true,
      }}
    />
  )
}

export default BackgroundImage
