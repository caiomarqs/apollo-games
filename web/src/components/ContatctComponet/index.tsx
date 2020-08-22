import React from 'react';
import { connect } from 'react-redux';

import { ContactBranding } from './ContactBranding';
import { ContactForm } from './ContactForm';
import { Email, sendEmailTo } from '../../actions';
import { Modal } from '../Modal';
import { history } from '../../history';
import { StoreState } from '../../reducers';

interface ContactContainerProps {
  sendEmailTo(email: Email): void;
  message: string;
}

export class _ContactContainer extends React.Component<ContactContainerProps> {
  state = {
    show: false,
  };
  onSendEmail = (email: Email) => {
    this.props.sendEmailTo(email);
    this.setState({ show: true });
  };

  renderModal = () => {
    const onDismiss = () => {
      history.push('/');
    };
    if (this.state.show) {
      return (
        <Modal
          content={this.props.message}
          title="Message Feedback"
          onDismiss={onDismiss}
          actions={<button onClick={onDismiss}>Okay</button>}
        />
      );
    }

    return null;
  };

  render() {
    return (
      <div className="contact-container">
        {this.renderModal()}
        <ContactBranding />
        <ContactForm onSendEmail={this.onSendEmail} />
      </div>
    );
  }
}

const mapStateToProps = ({ emailMessage: { message } }: StoreState) => {
  return { message };
};

export const ContactContainer = connect(mapStateToProps, { sendEmailTo })(
  _ContactContainer
);
