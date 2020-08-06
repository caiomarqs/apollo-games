import React from 'react';
import NavBar from './NavBar'
import FooterBar from './FooterBar'
import Sections from './sections';
import OverMenu from './OverMenu'

export class App extends React.Component {

  render() {
    return (
      <>
        <NavBar />
        <OverMenu />
        <Sections />
        <FooterBar />
      </>
    );
  }
}