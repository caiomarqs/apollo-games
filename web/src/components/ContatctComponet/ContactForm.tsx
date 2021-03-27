import React from 'react';
import { Field, reduxForm, InjectedFormProps, reset } from 'redux-form';
import _ from 'lodash';
import { FormattedMessage } from 'react-intl';

import { RenderField } from '../RenderField';
import { Email } from '../../actions';


const formFields = [
  {
    label: 'Nome',
    name: 'name',
    type: 'text',
    field: 'input',
    className: 'inputField'
  },
  {
    label: 'Email',
    name: 'from',
    type: 'email',
    field: 'input',
    className: 'inputField'
  },
  {
    label: 'Assunto',
    name: 'subject',
    type: 'text',
    field: 'input',
    className: 'inputField'
  },
  {
    label: '',
    name: 'text',
    field: 'textarea',
    className: 'mensagem'
  },
];

type fieldsType = {
  name: string;
  label: JSX.Element;
  type: string;
  field: string;
  className: string;
};

interface ContactFormProps {
  onSendEmail(email: Email): void;
}

class _ContactForm extends React.Component<
  ContactFormProps & InjectedFormProps<Email, ContactFormProps>
> {
  render() {
    const { pristine, submitting, handleSubmit, onSendEmail } = this.props;
    return (
      <div className="contact-form noselect">
        <h5><FormattedMessage id="contatcForm.h5"/></h5>
        <form
          onSubmit={handleSubmit((formValues) => {
            onSendEmail(formValues);
          })}
          autoComplete="off"
          className="form-contact"
        >
          {_.map(
            formFields,
            ({ name, label, type, field, className }: fieldsType) => {
              return (
                <Field
                  key={name}
                  component={RenderField}
                  type={type}
                  label={label}
                  name={name}
                  field={field}
                  className={className}
                />
              );
            }
          )}

          <button
            className="noselect"
            disabled={pristine || submitting}
            type="submit"
          >
            <FormattedMessage id="contactForm.button"/>
          </button>
        </form>
      </div>
    );
  }
}

// const validate = (values: any) => {
//     const errors = {} as any;
//     errors.from = validateEmail(values.from || '');

//     _.each(formFields, ({ name, noValueError }) => {
//         if (!values[name]) errors[name] = noValueError;
//     })
//     return errors
// }

const affterSubimit = (result: any, dispatch: any ) => {
  dispatch(reset('contactForm'));
}

export const ContactForm = reduxForm<Email, ContactFormProps>({
  form: 'contactForm', 
  onSubmitSuccess: affterSubimit
})(_ContactForm);
