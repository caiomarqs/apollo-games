import React from 'react';
import { connect } from 'react-redux';

import { LoginForm } from '../components/LoginForm';
import { logUserIn, User, changeTheme, navThemeEnum } from '../actions';
import { StoreState } from '../reducers';
import { history } from '../history'

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginPageProps {
  logUserIn(formValues: User): Promise<string | undefined>;
  changeTheme: typeof changeTheme;
  auth: User;
}

class _LoginPage extends React.Component<LoginPageProps> {

  componentDidMount() {
    this.props.changeTheme(navThemeEnum.WHITE, false);
    
    if(this.props.auth._id !== '' && this.props.auth._id !== undefined ){
        history.push('/backend/dashboard')
    }
  }

  onLoginSubmit = (formValues: LoginFormValues) => {
    const { logUserIn } = this.props;
    return logUserIn(formValues);
  };

  render() {
    return (
      <div className="loginPage">
        <LoginForm onLoginSubmit={this.onLoginSubmit} />
        <p className="caption-font noselect"> © 2020 Apollo Games Lab - All rights reserved </p>
      </div>
    );
  }
}

const mapStateToProps = ( { auth }: StoreState) => {
  return { auth }
}

export const LoginPage = connect(mapStateToProps, { logUserIn, changeTheme })(_LoginPage);
