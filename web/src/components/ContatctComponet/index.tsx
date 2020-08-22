import React from 'react';
import { connect } from 'react-redux';

import { ContactBranding } from './ContactBranding';
import { ContactForm } from './ContactForm';
import { Email, sendEmailTo } from '../../actions';
import { Modal } from '../Modal';
import { StoreState } from '../../reducers';
import { FormattedMessage } from 'react-intl';

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
      this.setState({ show: !this.state.show })
      // window.location.reload(false);
    }

    const mensagemTratada = () => {
      if(this.props.message){
        return <FormattedMessage id="contato.modal.sucesso"/>
      } 
      return <></>
    }
 

    if (this.state.show) {
      return (
        <Modal content={mensagemTratada()} title="Mensagem Enviada com Sucesso!" onDismiss={onDismiss} />
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
