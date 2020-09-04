import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter as TwitterLogo,  faSteamSymbol as SteamLogo,  faInstagram as InstaLogo, faTwitch as TwitchLogo, faYoutube as YoutubeLogo} from '@fortawesome/free-brands-svg-icons'
import { HashLink } from 'react-router-hash-link'
import { connect } from 'react-redux'

import { LocalesButtons } from './LocalesButtons'
import { handlerOverMenu } from '../../actions'
import { StoreState } from '../../reducers'

interface MenuItemsProps {
  isOver?: boolean,
  id: string,
  className: string,
  handlerOverMenu: typeof handlerOverMenu,
  openMenu: boolean
}

class _MenuItems extends React.Component<MenuItemsProps> {

  handlerMenu = () => {
    if(this.props.isOver === true){
      this.props.handlerOverMenu(!this.props.openMenu)
      return
    }
    return
  }

  render() {
    return (
      <> 
        <ul id={this.props.id} className={this.props.className}>
          <li className="nav-item btn-font" onClick={() => this.handlerMenu()}>
            <HashLink className="nav-link" to="/#about" >
              <FormattedMessage id="navItems.sobre" />
            </HashLink>
          </li>
          <li className="nav-item btn-font" onClick={() => this.handlerMenu()}>
            <HashLink className="nav-link" to="/#games" >
              <FormattedMessage id="navItems.games" />
            </HashLink>
          </li>
          <li className="nav-item btn-font" onClick={() => this.handlerMenu()}>
            <HashLink className="nav-link" to="/#team">
              <FormattedMessage id="navItems.time" />
            </HashLink>
          </li>
          <li className="nav-item btn-font" onClick={() => this.handlerMenu()}>
            <div className="brands-container">
              <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/ApolloGamesLab">
                <FontAwesomeIcon icon={TwitterLogo} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://steamcommunity.com/groups/forcaintrepida">
                <FontAwesomeIcon icon={SteamLogo} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/apollogameslab/">
                <FontAwesomeIcon icon={InstaLogo} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCLN9FIqyuuGweIFbz2NvdRQ">
                <FontAwesomeIcon icon={YoutubeLogo} />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="https://www.twitch.tv/apollogameslab">
                <FontAwesomeIcon icon={TwitchLogo} />
              </a>
            </div>
          </li>
          <li className={`nav-item`} onClick={() => this.handlerMenu()}>
            <LocalesButtons />
          </li>
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state: StoreState) => {
  return { openMenu: state.overMenu.openMenu }
}

export const MenuItems = connect(mapStateToProps, { handlerOverMenu })(_MenuItems)