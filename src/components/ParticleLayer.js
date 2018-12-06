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
                  value: '#F92672'
                },
                size: {
                  value: 2
                },
                line_linked: {
                  color: '#F92672',
                  opacity: 0.4,
                  distance: 250,
                },
                move: {
                  speed: 2
                },
                retina_detect: true,
              }
              
            }}
        />
      </div>
    )
  
}

