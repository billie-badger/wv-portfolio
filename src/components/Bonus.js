import React, { Component } from 'react'

export class Bonus extends Component {
  render() {
    return (
      <div className='bonus'>
        <div>
          <h1>Woodworks</h1>
            <ul className="woodworks">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
        </div>
        <div>
          <h1>Electronics</h1>
          <ul className="electronics">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1>Music</h1>
          <ul className="music">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h1>Martial Arts</h1>
          <ul className="martial-arts">
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

export default Bonus
