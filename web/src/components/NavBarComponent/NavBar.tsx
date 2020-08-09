import React from 'react';
import { Logo } from './Logo';

export enum NavBarThemes {
  DARK = 'DARK',
  WHITE = 'WHITE',
}

type props = {
  overEmit?: boolean;
  menus: boolean;
  theme?: NavBarThemes;
};

export class NavBar extends React.Component<props> {
  navColor = (theme: NavBarThemes | undefined) => {
    if (theme) return theme === NavBarThemes.DARK ? 'dark-nav' : 'white-nav';
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
          <ul id="items-container" className="items-container">
            <li className="nav-item btn-font">
              <a className="nav-link" href="#about">
                sobre
              </a>
            </li>
            <li className="nav-item btn-font">
              <a className="nav-link" href="#games">
                games
              </a>
            </li>
            <li className="nav-item btn-font">
              <a className="nav-link" href="#team">
                time
              </a>
            </li>
          </ul>
        </>
      );
    }
    return;
  };

  render() {
    const { theme } = this.props;

    return (
      <>
        <div
          className={`noselect navbar navbar-dark custom-nav ${this.navColor(
            theme
          )}`}
        >
          <div className="container">
            <a className="custom-brand" href="/">
              <Logo color={theme === NavBarThemes.DARK ? 'white' : 'black'} />
            </a>
            {this.renderItems(this.props.menus)}
          </div>
        </div>
      </>
    );
  }
}
