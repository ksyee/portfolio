import { useCallback } from 'react';
import type { Engine } from 'tsparticles-engine';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { html5, react, js } from '@/assets/particles/index';

export function UserParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     console.log(container);
  //   },
  //   []
  // );

  return (
    <Particles
      id="tsparticles"
      className="z-0 h-screen w-full"
      init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        background: {
          color: {
            value: '#101820',
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: 'bubble',
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 60,
              size: 20,
              duration: 2,
              opacity: 0.8,
            },
          },
        },
        particles: {
          links: {
            color: '#ffffff',
            distance: 120,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: true,
            speed: 0.3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 20,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'image',
            image: [
              {
                src: html5,
                width: 100,
                height: 130,
              },
              {
                src: react,
                width: 100,
                height: 100,
              },
              {
                src: js,
                width: 100,
                height: 110,
              },
            ],
          },
          size: {
            value: { min: 5, max: 15 },
          },
        },
        detectRetina: false,
      }}
    />
  );
}
