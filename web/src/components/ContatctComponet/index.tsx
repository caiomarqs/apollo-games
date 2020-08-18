import React from 'react'
import { connect } from 'react-redux'

import { ContactBranding } from './ContactBranding'
import { ContactForm } from './ContactForm'
import { Email, sendEmailTo } from '../../actions'

interface ContactContainerProps{
    sendEmailTo(email: Email): void; 
}

export class _ContactContainer extends React.Component<ContactContainerProps> {

    onSendEmail = (email: Email) => this.props.sendEmailTo(email);

    render() {
        return (
            <div className="contact-container">
                <ContactBranding />
                <ContactForm onSendEmail={this.onSendEmail} />
            </div>
        )
    }
}



export const ContactContainer = connect(null, { sendEmailTo })(_ContactContainer)