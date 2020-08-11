import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter as TwitterLogo,
    faSteamSymbol as SteamLogo,
    faInstagram as InstaLogo,
    faYoutube as YTLogo
} from '@fortawesome/free-brands-svg-icons'

import { LocalesButtons } from './LocalesButtons'

type MenuItemsProps = {
    isOver?: boolean
    id: string
    className: string
}

export class MenuItems extends React.Component<MenuItemsProps>{

    isOverHandler(status = false) {
        if (status === true) return 'li-over'
        return ''
    }

    render() {
        return (
            <>
                <ul id={this.props.id} className={this.props.className}>
                    <li className={`nav-item btn-font ${this.isOverHandler(this.props.isOver)}`}>
                        <a className="nav-link" href="#about"><FormattedMessage id='navItems.sobre' /></a>
                    </li>
                    <li className={`nav-item btn-font ${this.isOverHandler(this.props.isOver)}`}>
                        <a className="nav-link" href="#games"><FormattedMessage id='navItems.games' /></a>
                    </li>
                    <li className={`nav-item btn-font ${this.isOverHandler(this.props.isOver)}`}>
                        <a className="nav-link" href="#team"><FormattedMessage id='navItems.time' /></a>
                    </li>
                    <li className={`nav-item btn-font ${this.isOverHandler(this.props.isOver)}`}>
                        <div className="brands-container">
                            <a href="https://twitter.com/ApolloGamesLab"><FontAwesomeIcon icon={TwitterLogo} /></a>
                            <a href="https://steamcommunity.com/groups/forcaintrepida"><FontAwesomeIcon icon={SteamLogo} /></a>
                            <a href="https://www.instagram.com/apollogameslab/"><FontAwesomeIcon icon={InstaLogo} /></a>
                            {/* <a href="/"><FontAwesomeIcon icon={YTLogo} /></a> */}
                        </div>
                    </li>
                    <li className={`nav-item ${this.isOverHandler(this.props.isOver)}`}>
                        <LocalesButtons />
                    </li>
                </ul>
            </>
        )
    }
}