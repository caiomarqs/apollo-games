import React from 'react'

import { ContactBranding } from './ContactBranding'
import { ContactForm } from './ContactForm'

export class ContactContainer extends React.Component {

    

    render() {
        return (
            <div className="contact-container">
                <ContactBranding />
                <ContactForm />
            </div>
        )
    }
}