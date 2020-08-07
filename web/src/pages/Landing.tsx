import React from 'react';

import NavBar from '../components/NavBar';
import OverMenu from '../components/OverMenu';
import Sections from '../components/sections';
import FooterBar from '../components/FooterBar';

export class Landing extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <OverMenu />
        <Sections />
        <FooterBar />
      </div>
    );
  }
}
