import React, { Component } from 'react'

import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'


import ParticleLayer from './components/ParticleLayer';
import Routes from './components/Routes';
import Contact from './components/Contact';




class App extends Component {
  render() {
    return (
      <div className='App gray'>
        <ParticleLayer />
        <Routes />
        <Contact />
      </div>
    );
  }
}

export default App;
