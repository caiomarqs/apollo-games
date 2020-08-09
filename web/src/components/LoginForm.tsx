import React from 'react';
import { SubmissionError } from 'redux-form';
import { connect } from 'react-redux';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import { validateEmail } from '../utils/validateEmail';
import { InputField } from './InputField';
import { LoginFormValues } from '../pages/LoginPage';
import { StoreState } from '../reducers';

interface LoginFormProps {
  onLoginSubmit(formValues: LoginFormValues): Promise<string | undefined>;
  message: string;
}

const formFields = [
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    noValueError: 'Digite seu email para fazer login',
  },
  {
    label: 'Senha',
    name: 'password',
    type: 'password',
    noValueError: 'Digite sua senha para fazer login',
  },
];

type fieldsType = { name: string; label: string; type: string };

class _LoginForm extends React.Component<
  LoginFormProps & InjectedFormProps<LoginFormValues, LoginFormProps>
> {
  renderFields = () => {
    return _.map(formFields, ({ name, label, type }: fieldsType) => {
      return (
        <Field
          key={name}
          component={InputField}
          type={type}
          label={label}
          name={name}
        />
      );
    });
  };

  onLoginSubmitClicked = (formValues: LoginFormValues) => {
    const { onLoginSubmit } = this.props;

    return onLoginSubmit(formValues).then((message) => {
      if (message?.includes('Email')) {
        throw new SubmissionError({
          email: message,
        });
      } else if (message?.includes('Senha')) {
        throw new SubmissionError({
          password: message,
        });
      }
    });
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;

    return (
      <form
        className="loginForm noselect"
        onSubmit={handleSubmit(this.onLoginSubmitClicked)}
        autoComplete="off"
      >
        <img
          src={require('../assets/brand/apollo_logo_ext_white.svg')}
          alt="Logo Apollo"
        ></img>
        {this.renderFields()}
        <button
          className="noselect"
          disabled={pristine || submitting}
          type="submit"
        >
          Login
        </button>
      </form>
    );
  }
}

const validate = (values: any) => {
  const errors = {} as any;
  errors.email = validateEmail(values.email || '');

  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) errors[name] = noValueError;
  });
  return errors;
};

const mapStateToProps = (state: StoreState) => {
  const message = state.auth.message as string;
  return { message };
};

export const LoginForm = connect(mapStateToProps)(
  reduxForm<LoginFormValues, LoginFormProps>({
    validate,
    form: 'loginForm',
  })(_LoginForm)
);
