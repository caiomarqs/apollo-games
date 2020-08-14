import React from 'react'

import { FormContact } from './FormContact'
import { FooterBar } from '../../components/FooterBar'

export class ContactPage extends React.Component {

    render() {
        return (
            <>  
                <FormContact />
                <FooterBar />
            </>
        )
    }

}