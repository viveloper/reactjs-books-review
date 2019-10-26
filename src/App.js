import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"
          render={
            props => {
              // 토큰이 존재하면 로그인페이지 못가게하기 로직 필요
              return (<Home {...props} />)
            }
          }
        />
        <Route exact path="/signin" component={Signin} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}

export default App;
