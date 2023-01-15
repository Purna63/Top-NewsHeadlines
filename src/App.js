
import './App.css';

import React, { Component } from 'react'
import NavNews from './component/NavNews';
import News from './component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=12;
  render() {
    return (
      <Router>
      <div>
        <NavNews />
     
        <Switch>
          <Route exact path="/"> <News key="general" pageSize={6} country="in" category="general"/> </Route>
          <Route exact path="/business"> <News key="business" pageSize={6} country="in" category="business"/> </Route>
          <Route exact path="/technology"> <News key="technology" pageSize={6} country="in" category="technology"/> </Route>
          <Route exact path="/sports"> <News key="sports" pageSize={6} country="in" category="sports"/> </Route>
          <Route exact path="/health"> <News key="health" pageSize={6} country="in" category="health"/> </Route>
          <Route exact path="/science"> <News key="science" pageSize={6} country="in" category="science"/> </Route>
        </Switch>
      </div>
      </Router>
    )
  }
}
