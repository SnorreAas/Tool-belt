import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from "../home";
import Preview from "../preview";

class Pages extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/preview' component={Preview} />
        <Route component={Error} />
      </Switch>
    );
  }
}

export default Pages;
