import React from 'react';
import { Route, Router } from 'react-router-dom';

import { history } from '../history';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Landing } from '../pages/Landing';

export class App extends React.Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Route path="/backend" exact component={Login}></Route>
          <Route path="/backend/dashboard" exact component={Dashboard}></Route>
          <Route path="/" component={Landing} exact></Route>
        </Router>
      </>
    );
  }
}
