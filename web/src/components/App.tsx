import React from 'react';
import NavBar from './NavBar';
import FooterBar from './FooterBar';
import Sections from './sections';
import OverMenu from './OverMenu';
import { Route, Router } from 'react-router-dom';
import { history } from '../history';
import { Login } from '../pages/Login';
import { Dashboard } from '../pages/Dashboard';

export class App extends React.Component {
  render() {
    return (
      <>
        <Router history={history}>
          <Route path="/backend" exact component={Login}></Route>
          <Route path="/backend/dashboard" exact component={Dashboard}></Route>
          <Route path="/" exact>
            <NavBar />
            <OverMenu />
            <Sections />
            <FooterBar />
          </Route>
        </Router>
      </>
    );
  }
}
