import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import logo from '../assets/wv-logo-white.png'

export class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        
          <Link to="/">
            <div className='Home'>
              <Fade
                delay={1900}
              >
                <img 
                    src={logo} 
                    alt="wv-logo"
                    style={{
                      width: '30px',
                      position: 'absolute',
                      top: '1.5em',
                      left: '1.5em',
                    }}
                />
              </Fade>
            </div>
          </Link>
          <Fade
            delay={2000}
          >
          <ul>
            <Link to='/about'>
              <li className="orange">about</li>
            </Link>
            <Link to='/code'>
              <li className="blue">code</li>
            </Link>
            <Link to='/design'>
              <li className="pink">design</li>
            </Link>
            <Link to='/bonus'>
              <li className="green">bonus</li>
            </Link>
          </ul>
        </Fade>
      </div>
    )
  }
}

export default Nav
