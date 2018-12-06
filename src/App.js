import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Nav from './components/Nav'
import Contact from './components/Contact';
import Main from './components/Main';
import ParticleLayer from './components/ParticleLayer';
import About from './components/About'
import Code from './components/Code'
import Design from './components/Design'
import Bonus from './components/Bonus'




class App extends Component {
  render() {
    return (
      <Router>
        <div className="App gray">
          <ParticleLayer />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/design" component={Design} />
            <Route exact path="/bonus" component={Bonus} />
          </Switch>
          <Nav />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
