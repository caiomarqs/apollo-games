import React from 'react';
import { Router, Route } from 'react-router-dom';

import { history } from '../history';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div className="container">
            <Route path="/backend" exact component={Login}></Route>
            <Route
              path="/backend/dashboard"
              exact
              component={Dashboard}
            ></Route>
          </div>
        </Router>
      </div>
    );
  }
}
