import React from 'react';
import { Route, Router } from 'react-router-dom';

import { history } from './history';
import { NavBar } from './components/NavBarComponent/NavBar';
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { Landing } from './pages/Landing';
import { AddTeamForm } from './components/backend/teams/AddTeamForm';
import { UpdateTeamForm } from './components/backend/teams/UpdateTeamForm';

interface AppProps {}

interface AppState {}

export class App extends React.Component<AppProps, AppState> {

  render() {
    return (
      <>
        <NavBar />
        <Router history={history}>
          <Route 
            path="/backend" 
            exact 
            component={LoginPage} />
          <Route 
            path="/backend/dashboard" 
            exact 
            component={Dashboard} />
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
          <Route path="/" exact component={Landing} />
        </Router>
      </>
    );
  }
}
