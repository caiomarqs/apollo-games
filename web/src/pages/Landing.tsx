import React from 'react';
import { connect } from 'react-redux';

import OverMenu from '../components/NavBarComponent/OverMenu';
import Sections from '../components/SectionsComponent';
import { FooterBar } from '../components/FooterBar';
import { ComercialDiv } from '../components/ComercialDiv'
import { changeTheme, navThemeEnum } from '../actions';

interface LandingProps {
  changeTheme: typeof changeTheme;
}

export class _Landing extends React.Component<LandingProps> {
  
  componentDidMount() {
    this.props.changeTheme(navThemeEnum.DARK, true);
  }
  componentWillUnmount() {
    this.props.changeTheme(navThemeEnum.WHITE, false);
  }

  render() {
    return (
      <>
        <ComercialDiv tiemout={15000} />
        <OverMenu />
        <Sections />
        <FooterBar />
      </>
    );
  }
}

export const Landing = connect(null, { changeTheme })(_Landing);
