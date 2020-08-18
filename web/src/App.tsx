import React from 'react';
import { Route, Router, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Cookie from 'js-cookie';

import { history } from './history';
import { NavBar } from './components/NavBarComponent/NavBar';
import { OverMenu } from './components/OverMenu'
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/Dashboard';
import { Landing } from './pages/Landing';
import { ContactPage } from './pages/ContactPage';
import { AddTeamForm } from './components/backend/teams/AddTeamForm';
import { UpdateTeamForm } from './components/backend/teams/UpdateTeamForm';
import { I18nProvider, LOCALES } from './i18n';
import { StoreState } from './reducers';
import { changeLanguage } from './actions';
import { ScrollToTop } from './components/ScrollToTop';

interface AppProps {
  language: LOCALES;
  changeLanguage: typeof changeLanguage;
  email: string | undefined;
}

interface AppState { }

export class _App extends React.Component<AppProps, AppState> {
  componentDidMount() {
    const locale = (Cookie.get('locale') as LOCALES) || ('pt-br' as LOCALES);
    this.props.changeLanguage(locale);
  }
  render() {
    return (
      <>
        <I18nProvider locale={this.props.language}>
          <Router history={history}>
            <NavBar />
            <OverMenu />
            <ScrollToTop />
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/backend" exact component={LoginPage} />
              <Route path="/backend/dashboard" exact> {!this.props.email ? <Redirect to="/" /> : <Dashboard />} </Route>
              <Route path="/backend/dashboard/team/add/member" exact component={AddTeamForm} />
              <Route path="/backend/dashboard/team/update/member/:id/:team" exact component={UpdateTeamForm} />
              <Route path="/contact" exact component={ContactPage} />
              <Route path="*" status={404}><Redirect to="/"/></Route>
            </Switch>
          </Router>
        </I18nProvider>
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { language: state.languages.language, email: state.auth.email };
};

export const App = connect(mapStateToProps, { changeLanguage })(_App);
