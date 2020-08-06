import React from 'react';
import { InjectedFormProps, reduxForm, Field } from 'redux-form';
import _ from 'lodash';

import { validateEmail } from '../../utils/validateEmail';
import { InputField } from './InputField';
import { LoginFormValues } from '../../pages/Login';

interface LoginFormProps {
  onLoginSubmit(formValues: LoginFormValues): void;
}

const formFields = [
  {
    label: 'Digite o seu email ',
    name: 'email',
    type: 'email',
    noValueError: 'O  email é obrigatório',
  },
  {
    label: 'Digite a sua senha',
    name: 'password',
    type: 'password',
    noValueError: 'A senha é obrigatória',
  },
];

class _LoginForm extends React.Component<
  LoginFormProps & InjectedFormProps<{}, LoginFormProps>
> {
  renderFields = () => {
    return _.map(
      formFields,
      ({
        name,
        label,
        type,
      }: {
        name: string;
        label: string;
        type: string;
      }) => {
        return (
          <Field
            key={name}
            component={InputField}
            type={type}
            label={label}
            name={name}
          />
        );
      }
    );
  };
  render() {
    const { handleSubmit, onLoginSubmit } = this.props;
    return (
      <div>
        <form
          onSubmit={handleSubmit((e) => onLoginSubmit(e as LoginFormValues))}
        >
          {this.renderFields()}

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const validate = (values: any) => {
  const errors = {} as any;
  errors.recipients = validateEmail(values.recipients || '');
  _.each(formFields, ({ name, noValueError }) => {
    if (!values[name]) {
      errors[name] = noValueError;
    }
  });

  return errors;
};

export const LoginForm = reduxForm<{}, LoginFormProps>({
  validate,
  form: 'loginForm',
})(_LoginForm);
