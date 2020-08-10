import React from 'react'
import { connect } from 'react-redux'
import { FormattedMessage } from 'react-intl'


export class PrincipalSection extends React.Component {
    render() {
        return (
            <div id="principal">
                <div className="container noselect">
                    <img src={require('../../../assets/brand/apollo_logo_white.svg')} className="brand-principal" alt="Apollo Logo" />
                    <h4><FormattedMessage id="principal.titulo" /></h4>
                    <p><FormattedMessage id="principal.p"/></p>
                </div>
            </div>
        )
    }
}

