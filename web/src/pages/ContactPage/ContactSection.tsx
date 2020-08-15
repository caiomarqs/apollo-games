import React from 'react';
import { connect } from 'react-redux';

import { changeTheme, navThemeEnum } from '../../actions';
import { ContactContainer } from '../../components/ContatctComponet'

interface ContactSectionProps {
  changeTheme: typeof changeTheme;
}

export class _ContactSection extends React.Component<ContactSectionProps> {
  componentDidMount() {
    this.props.changeTheme(navThemeEnum.DARK, true);
  }

  componentWillUnmount() {
    this.props.changeTheme(navThemeEnum.WHITE, false);
  }

  render() {
    return <div id="contac-page"><div className="container"><ContactContainer/></div></div>;
  }
}

export const ContactSection = connect(null, { changeTheme })(_ContactSection);
