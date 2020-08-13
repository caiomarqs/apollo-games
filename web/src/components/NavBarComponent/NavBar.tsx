import React from 'react';
import { connect } from 'react-redux';

import { Logo } from './Logo';
import { navThemeEnum, Theme } from '../../actions';
import { StoreState } from '../../reducers';
import { MenuItems } from './MenuItems';

interface NavBarProps {
  overEmit?: boolean;
  theme: Theme;
  userId: string | undefined
}

class _NavBar extends React.Component<NavBarProps> {

  renderLogOut(userId: string | undefined) {
    if (userId !== undefined && userId !== '')
      return (
        <a className="btn-font" href="/api/logout">Log Out</a>
      )
    return
  }

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
          <MenuItems id="items-container" className="items-container" />
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
            {this.renderLogOut(this.props.userId)}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { theme: state.theme, userId: state.auth._id };
};

export const NavBar = connect(mapStateToProps)(_NavBar);
