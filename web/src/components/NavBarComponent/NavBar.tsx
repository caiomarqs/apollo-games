import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Logo } from './Logo';
import { navThemeEnum, Theme, logUserOut } from '../../actions';
import { StoreState } from '../../reducers';
import { MenuItems } from './MenuItems';
import { HambugerMenu } from './HambugerMenu';

interface NavBarProps {
  overEmit?: boolean;
  theme: Theme;
  userId: string | undefined;
  logUserOut: typeof logUserOut;
}

class _NavBar extends React.Component<NavBarProps> {

  static isBackend = false

  onLogOutClicked = () => {
    this.props.logUserOut();
  };

  renderLogOut(userId: string | undefined) {
    if (userId !== undefined && userId !== '') {

      if (this.props.theme.navTheme === navThemeEnum.DARK) return <></>;

      return <a onClick={this.onLogOutClicked} className="btn-font" href="/api/logout"> Log Out </a>
    }
  }

  navColor = (theme: navThemeEnum) => {
    if (theme) return theme === navThemeEnum.DARK ? 'dark-nav' : 'white-nav';
  };

  renderItems = (render: boolean) => {
    if (render === true) {
      return (
        <>
          <HambugerMenu />
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
            <Link className="custom-brand" to="/">
              <Logo
                color={navTheme === navThemeEnum.DARK ? 'white' : 'black'}
              />
            </Link>
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

export const NavBar = connect(mapStateToProps, { logUserOut })(_NavBar);
