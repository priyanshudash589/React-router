import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashbd';

function Routing() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/card" exact component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default Routing;