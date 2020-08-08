import React from 'react';

import OverMenu from '../components/OverMenu';
import Sections from '../components/SectionsComponent';
import FooterBar from '../components/FooterBar';

interface LandingProps{
  navHandler?: Function
}

export class Landing extends React.Component<LandingProps> {

  componentDidMount(){
    if(this.props.navHandler) this.props.navHandler()
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
