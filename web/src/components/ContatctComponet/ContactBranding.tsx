import React from 'react'

import { Mail } from '../Icons'
import { FormattedMessage } from 'react-intl'

export class ContactBranding extends React.Component {
    render() {
        return (
            <div className="contatc-branding">
                <h4 className="noselect"><FormattedMessage id="contactBranding.h4"/></h4>
                <p className="sub-bold noselect"><FormattedMessage id="contactBranding.p"/></p>
                <div className="mail-adress">
                    <Mail fill="#FFFFFF"/>
                    <a href="mailto:name@email.com" className="body-regular">apollo@inzt.com.br</a>
                </div>
                <img className="planet-one noselect" src={require('../../assets/contents/planet-one.svg')} alt="asset_planet"></img>
                <img className="planet-two noselect" src={require('../../assets/contents/planet-two.svg')} alt="asset_panet_two"></img>
                <img className="envelop noselect"  src={require('../../assets/contents/envelop.svg')} alt="asset_envelop"></img>
            </div>
        )
    }
}