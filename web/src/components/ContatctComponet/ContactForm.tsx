import React from 'react'
import { Field, reduxForm, InjectedFormProps, } from 'redux-form'
import _ from 'lodash'

import { InputField } from '../InputField'
import { validateEmail } from '../../utils/validateEmail'

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
        noValueError: 'Digite sua senha para fazer login',
    },
    {
        label: 'Email',
        name: 'subject',
        type: 'text',
        noValueError: 'Digite sua senha para fazer login',
    }
]

type fieldsType = {
    name: string;
    label: string;
    type: string
}


interface ContactFormProps {

}

class _ContactForm extends React.Component<ContactFormProps & InjectedFormProps<{}, ContactFormProps>> {



    render() {
        const {pristine, submitting, handleSubmit} = this.props
        return (
            <div className="contact-form noselect">
                <h4>Mande uma mensagem</h4>
                <form>
                    {_.map(formFields, ({ name, label, type }: fieldsType) => {
                        return <Field key={name} component={InputField} type={type} label={label} name={name} />
                    })
                    }
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

export const ContactForm = reduxForm<{}, ContactFormProps>({ validate, form: 'contacForm' })(_ContactForm)