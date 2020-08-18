import React from 'react'
import { Field, reduxForm, InjectedFormProps } from 'redux-form'
import _ from 'lodash'

import { InputField } from '../InputField'
import { validateEmail } from '../../utils/validateEmail'
import { Email } from '../../actions'

const formFields = [
    {
        label: 'Nome',
        name: 'name',
        type: 'text',
        noValueError: 'Digite seu nome',
    },
    {
        label: 'Email',
        name: 'from',
        type: 'email',
        noValueError: 'Digite o email',
    },
    {
        label: 'Assunto',
        name: 'subject',
        type: 'text',
        noValueError: 'Digite o assunto',
    },
    {
        label: 'Mensagem',
        name: 'text',
        type: 'text',
        noValueError: 'Digite a mensagem    ',
    }
]

type fieldsType = {
    name: string;
    label: string;
    type: string
}


interface ContactFormProps {
    onSendEmail(email: Email): void
}

class _ContactForm extends React.Component<ContactFormProps & InjectedFormProps<Email, ContactFormProps>> {



    render() {
        const { pristine, submitting, handleSubmit, onSendEmail } = this.props
        return (
            <div className="contact-form noselect">
                <h4>Mande uma mensagem</h4>
                <form onSubmit={handleSubmit((formValues) => { onSendEmail(formValues) })} autoComplete="off">
                    
                    {_.map(formFields, ({ name, label, type }: fieldsType) => <Field key={name} component={InputField} type={type} label={label} name={name} />)}
                    
                    <button className="noselect" disabled={pristine || submitting} type="submit">Enviar</button>
                </form>
            </div>
        )
    }
}

const validate = (values: any) => {
    const errors = {} as any;
    errors.from = validateEmail(values.from || '');

    _.each(formFields, ({ name, noValueError }) => {
        if (!values[name]) errors[name] = noValueError;
    })
    return errors
}

export const ContactForm = reduxForm<Email, ContactFormProps>({ validate, form: 'contacForm' })(_ContactForm)