import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" render={props => {
          if(!localStorage.getItem('token')){
            return <Signin {...props} />          
          }
          else{
            return <Redirect to="/" />
          }
        }} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
