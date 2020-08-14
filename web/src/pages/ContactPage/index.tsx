import React from 'react';

import { FormContact } from './FormContact';
import { FooterBar } from '../../components/FooterBar';
import { ScrollToTop } from '../../components/ScrollToTop';

export class ContactPage extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <FormContact />
        <FooterBar />
      </>
    );
  }
}
