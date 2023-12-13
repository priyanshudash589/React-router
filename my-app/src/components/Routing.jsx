import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashbd';

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact component={Login} />
        <Route path="/dashboard/:name" exact component={Dashboard} />
      </Routes>
    </Router>
  );
}

export default Routing;