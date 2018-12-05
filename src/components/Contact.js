import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Resume from './Resume'

export class Contact extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        showResume: false
    }
}
toggleResume = () => {
    console.log('Resume opening')
    this.setState({
        showResume: !this.state.showResume
    })
}
  
  render() {
    return (
      <div className="Contact">
        <Fade
          delay={2000}
        >
          <ul>
            <li className="orange">
              <a href="https://github.com/billie-badger" target="_blank" rel="noopener noreferrer"><i className='fa fa-github' /></a>
            </li>
            <li className="blue">
              <a href="https://www.linkedin.com/in/will-vatcher-9705b340/" target="_blank" rel="noopener noreferrer"><i className='fa fa-linkedin' /></a>
            </li>
            <li className="pink">
              <a href="mailto:will.vatcher@gmail.com"><i className='fa fa-envelope' /></a>
            </li>
            <li 
              className="green"
              onClick={this.toggleResume}
              >
              <i className="fa fa-file-pdf-o" />
              {this.state.showResume ? <Resume toggleResume={this.toggleResume} /> : null}
            </li>
          </ul>
        </Fade>
      </div>
    )
  }
}

export default Contact
