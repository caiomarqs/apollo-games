import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl'

import { Logo } from './Logo';
import { LocalesButtons } from './LocalesButtons'
import { navThemeEnum, Theme } from '../../actions';
import { StoreState } from '../../reducers';
import { MenuItems } from './MenuItems';

interface NavBarProps {
  overEmit?: boolean;
  theme: Theme;
}

class _NavBar extends React.Component<NavBarProps> {

  navColor = (theme: navThemeEnum) => {
    if (theme) return theme === navThemeEnum.DARK ? 'dark-nav' : 'white-nav';
  };

  renderItems = (render: boolean) => {
    if (render === true) {
      return (
        <>
          <div id="hambuger-menu" className="hambuger-menu">
            <span />
            <span />
            <span />
          </div>
          <MenuItems id='items-container' className='items-container' />
        </>
      );
    }
    return;
  };

  render() {
    const {
      theme: { navMenus, navTheme },
    } = this.props;

    return (
      <>
        <div
          className={`noselect navbar navbar-dark custom-nav ${this.navColor(
            navTheme
          )}`}
        >
          <div className="container">
            <a className="custom-brand" href="/">
              <Logo
                color={navTheme === navThemeEnum.DARK ? 'white' : 'black'}
              />
            </a>
            {this.renderItems(navMenus)}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { theme: state.theme };
};

export const NavBar = connect(mapStateToProps)(_NavBar);
