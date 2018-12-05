import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

export class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <Fade
          delay={1500}
        >
          <ul>
            <li className="orange">about</li>
            <li className="blue">code</li>
            <li className="pink">design</li>
            <li className="green">bonus</li>
          </ul>
        </Fade>
      </div>
    )
  }
}

export default Nav
