import React from 'react';
import { Route, Router } from 'react-router-dom';

import { history } from '../history';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';
import { Landing } from '../pages/Landing';
import { AddTeamForm } from './backend/teams/AddTeamForm';
import { UpdateTeamForm } from './backend/teams/UpdateTeamForm';

export class App extends React.Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Route path="/backend" exact component={Login} />
          <Route path="/backend/dashboard" exact component={Dashboard} />
          <Route
            path="/backend/dashboard/team/add/member"
            exact
            component={AddTeamForm}
          />
          <Route
            path="/backend/dashboard/team/update/member/:id/:team"
            exact
            component={UpdateTeamForm}
          />
          <Route path="/" component={Landing} exact></Route>
        </Router>
      </>
    );
  }
}
