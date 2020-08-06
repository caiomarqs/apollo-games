import React from 'react';
import { connect } from 'react-redux';

import { LoginForm } from '../components/backend/LoginForm';
import { logUserIn, User } from '../actions';
import { StoreState } from '../reducers';

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginProps {
  logUserIn(formValues: User): void;
  message: string;
}

class _Login extends React.Component<LoginProps> {
  onLoginSubmit = (formValues: LoginFormValues) => {
    this.props.logUserIn(formValues);
  };

  render() {
    const { message } = this.props;
    return (
      <div>
        {message}
        <LoginForm onLoginSubmit={this.onLoginSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  const message = state.auth.message as string;

  return { message };
};

export const Login = connect(mapStateToProps, { logUserIn })(_Login);
