import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './poc.css';
import Login from './Components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Components/Dashboard/dashboard';

const App = (props) => (
  <div>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path ='/dashboard' component={Dashboard}/>
    </Switch>
  </div>
);
export default App;



