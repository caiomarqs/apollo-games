import React from 'react';
import { connect } from 'react-redux';

import { LoginForm } from '../components/LoginForm';
import { logUserIn, User } from '../actions';

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginPageProps {
  logUserIn(formValues: User): Promise<string | undefined>;
}

class _LoginPage extends React.Component<LoginPageProps> {
  onLoginSubmit = (formValues: LoginFormValues) => {
    const { logUserIn } = this.props;
    return logUserIn(formValues);
  };

  render() {
    return (
      <div className="loginPage">
        <LoginForm onLoginSubmit={this.onLoginSubmit} />
        <p className="caption-font noselect">
          © 2020 Apollo Games Lab - All rights reserved
        </p>
      </div>
    );
  }
}

export const LoginPage = connect(null, { logUserIn })(_LoginPage);
