import React, { Component } from 'react'
import Typist from 'react-typist'


export class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="main-inner">
          <Typist
            cursor={{
              show: false,
              blink: false,
              element: "|"
            }}
          >
            <h1>Will Vatcher.</h1>
          </Typist>
          <div className="slogan">
            <Typist

              startDelay={1500}
              cursor={{
                show: false,
                blink: false,
                element: "|"
              }}
            >
              <p><span className='coder blue'>{"<"}Coder{"/>"}</span> for designers <br/> <span className='designer pink'>Designer</span> for coders.</p>
            </Typist>
          </div>
        </div>
      </div>
    )
  }
}

export default Main
