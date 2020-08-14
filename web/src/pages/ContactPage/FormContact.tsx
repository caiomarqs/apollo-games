import React from 'react';
import { connect } from 'react-redux';

import { changeTheme, navThemeEnum } from '../../actions';

interface FormContactProps {
  changeTheme: typeof changeTheme;
}

export class _FormContact extends React.Component<FormContactProps> {
  componentDidMount() {
    this.props.changeTheme(navThemeEnum.DARK, true);
    // window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.props.changeTheme(navThemeEnum.WHITE, false);
  }

  render() {
    return <div id="contac-page"></div>;
  }
}

export const FormContact = connect(null, { changeTheme })(_FormContact);
