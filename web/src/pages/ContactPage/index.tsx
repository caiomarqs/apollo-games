import React from 'react';

import { ContactSection } from './ContactSection';
import { FooterBar } from '../../components/FooterBar';
import { ScrollToTop } from '../../components/ScrollToTop';

export class ContactPage extends React.Component {
  render() {
    return (
      <>
        <ScrollToTop />
        <ContactSection />
        <FooterBar />
      </>
    );
  }
}
