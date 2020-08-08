import React from 'react'

import { InjectedFormProps, reduxForm, Field } from 'redux-form'
import _ from 'lodash'

import { validateEmail } from '../utils/validateEmail'
import { InputField } from './InputField'
import { LoginFormValues } from '../pages/LoginPage'

interface LoginFormProps {
    onLoginSubmit(formValues: LoginFormValues): void
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
]

type fieldsType = { name: string; label: string; type: string }

class _LoginForm extends React.Component<LoginFormProps & InjectedFormProps<{}, LoginFormProps>>{
    renderFields = () => {
        return _.map(formFields, ({ name, label, type }: fieldsType) => {
            return (
                <Field key={name} component={InputField} type={type} label={label} name={name} />
            )
        })
    }

    render() {
        
        const { handleSubmit, onLoginSubmit } = this.props

        return (
            <form
                className="loginForm noselect"
                onSubmit={handleSubmit((e) => onLoginSubmit(e as LoginFormValues))}
                autoComplete="off"
            >
                <img src={require('../assets/brand/apollo_logo_ext_white.svg')} alt="Logo Apollo"></img>
                {this.renderFields()}
                <button className='noselect' type="submit">Login</button>
            </form>
        )
    }
}

const validate = (values: any) => {

    const errors = {} as any
    errors.recipients = validateEmail(values.recipients || '')
   
    _.each(formFields, ({ name, noValueError }) => {     
        if (!values[name]) errors[name] = noValueError
    })
    return errors
}

export const LoginForm = reduxForm<{}, LoginFormProps>({ validate, form: 'loginForm' })(_LoginForm)
