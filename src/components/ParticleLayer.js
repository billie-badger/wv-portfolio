import React from 'react'
import Particles from 'react-particles-js';

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
                color: {
                  value: ['#232822', '#F92672', '#66D9EF', '#A6E22E', '#FD971F', '#FFFFFF']
                },
                size: {
                  value: 2
                },
                line_linked: {
                  color: '#000',
                  opacity: 0.4,
                },
                move: {
                  speed: 2
                }
              }
              
            }}
        />
      </div>
    )
  
}

