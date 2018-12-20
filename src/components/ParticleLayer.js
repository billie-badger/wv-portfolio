import React from 'react'
import { Particles } from 'react-particles-js';

export default function ParticleLayer() {

    return (
      <div className="particle-layer">
        <Particles 
            params={{
              particles: {
                number: {
                  value: 50,
                  density: {
                    enable: true,
                    value_area: 800
                  }
                },
                interactivity: {
                  detect_on: "window",
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse'
                    },
                    onclick: {
                      enable: true,
                      mode: 'grab'
                    },
                    resize: true
                  },
                  modes: {
                    grab: {
                      distance: 180,
                      line_linked: {
                        opacity: 0.35
                      }
                    },
                    repulse: {
                      distance: 100,
                      duration: 5
                    }
                  }
                },
                color: {
                  // value: ['#F92672', '#66D9EF', '#A6E22E', '#FD971F']
                  value: '#66D9EF'
                },
                size: {
                  value: 1.75
                },
                line_linked: {
                  color: '#000000',
                  opacity: 0.3,
                  distance: 240,
                },
                move: {
                  speed: 1.5
                },
                retina_detect: true,
              }
              
            }}
        />
      </div>
    )
  
}

