import React from 'react';
import { connect } from 'react-redux';

import OverMenu from '../components/OverMenu';
import Sections from '../components/SectionsComponent';
import FooterBar from '../components/FooterBar';
import { changeTheme, navThemeEnum } from '../actions';

interface LandingProps {
  navHandler?: Function;
  changeTheme: typeof changeTheme;
}

export class _Landing extends React.Component<LandingProps> {
  componentDidMount() {
    // if (this.props.navHandler) this.props.navHandler();
    this.props.changeTheme(navThemeEnum.DARK, true);
  }
  componentWillUnmount() {
    this.props.changeTheme(navThemeEnum.WHITE, false);
  }

  render() {
    return (
      <div>
        <OverMenu />
        <Sections />
        <FooterBar />
      </div>
    );
  }
}

export const Landing = connect(null, { changeTheme })(_Landing);
