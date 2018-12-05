import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'



export class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Fade
          delay={2000}
        >
          <ul>
            <li className="orange">
              <i className='fa fa-github' />
            </li>
            <li className="blue">
              <i className='fa fa-linkedin' />
            </li>
            <li className="pink">
              <i className='fa fa-envelope' />
            </li>
            <li className="green">
            <i class="fa fa-file-pdf-o" />
            </li>
          </ul>
        </Fade>
      </div>
    )
  }
}

export default Contact
