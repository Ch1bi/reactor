import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import App from '../App'
import Home from './Home'


const createRoutes = () => (
    <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/home" component={Home}/>
    </div>
    </Router>
);

export default createRoutes;