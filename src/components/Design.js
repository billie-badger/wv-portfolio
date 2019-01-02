import React, { Component } from 'react'

export class Design extends Component {
  render() {
    return (
      <div className='design'>
         <div>
          <h1>Logos</h1>
            <ul className="logos">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
        <div>
          <h1>Gimp</h1>
          <ul className="gimp">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1>Inkscape</h1>
          <ul className="inkscape">
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

export default Design
