import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Nav from './Nav'
import Main from './Main'
import About from './About'
import Code from './Code'
import Design from './Design'
import Bonus from './Bonus'

export class Routes extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route render={({ location }) => {
            return (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={300}
                  classNames='fade'
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/code" component={Code} />
                    <Route exact path="/design" component={Design} />
                    <Route exact path="/bonus" component={Bonus} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}} />
          <Nav />
        </div>
      </Router>
    )
  }
}

export default Routes
