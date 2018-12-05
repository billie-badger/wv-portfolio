import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Contact from './components/Contact';
import Main from './components/Main';
import ParticleLayer from './components/ParticleLayer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App gray">
          <ParticleLayer />
          <Route exact path="/" component={Main} />
          <Nav />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
