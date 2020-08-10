import React, { Fragment } from 'react'
import { IntlProvider } from 'react-intl'


import { LOCALES } from './locales'
import messages from './messages'

type ProviderProps = {
    locale: LOCALES
}

export class Provider extends React.Component<ProviderProps>{

    render() {

        const { children, locale } = this.props

        return (
            <IntlProvider
                locale={locale}
                textComponent={Fragment}
                messages={messages[locale]}
            >
            {children}
            </IntlProvider>
        )
    }
}


