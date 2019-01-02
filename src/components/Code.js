import React, { Component } from 'react'

export class Code extends Component {
    
  render() {
    return (   
      <div className='code'>
        <div>
          <h1>Pure CSS</h1>
            <ul className="pure-css">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
        <div>
          <h1>Vanilla JS</h1>
          <ul className="js">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1>React.js</h1>
          <ul className="js">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="scroll-arrow-up" />
        <div className="scroll-arrow-down" />
      </div>
    )
  }
}

export default Code
