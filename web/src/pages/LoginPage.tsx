import React from 'react';
import { connect } from 'react-redux';

import { LoginForm } from '../components/LoginForm'
import { logUserIn, User } from '../actions';
import { StoreState } from '../reducers';

export interface LoginFormValues {
  email: string;
  password: string;
}

interface LoginPageProps {
  logUserIn(formValues: User): void;
  message: string;
}

class _LoginPage extends React.Component<LoginPageProps> {

  onLoginSubmit = (formValues: LoginFormValues) => {
    this.props.logUserIn(formValues)
  }

  render() {
    const { message } = this.props; // OQE - Mensagem de erro
    return (
      <div className='loginPage'>
        <span className="loginError noselect">
          {message}
        </span>
        <LoginForm onLoginSubmit={this.onLoginSubmit} />
        <p className='caption-font noselect'>© 2020 Apollo Games Lab - All rights reserved</p>
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState) => {
  const message = state.auth.message as string
  return { message }
}

export const LoginPage = connect(mapStateToProps, { logUserIn })(_LoginPage)