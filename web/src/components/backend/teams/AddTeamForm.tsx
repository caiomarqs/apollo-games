import React from 'react';
import { connect } from 'react-redux';

import { TeamForm } from './TeamForm';
import { history } from '../../../history';
import { TeamState, addTeamMember } from '../../../actions';

interface AddTeamFormProps {
  addTeamMember(member: TeamState): void;
}

class _AddTeamForm extends React.Component<AddTeamFormProps> {
  onVoltarClicked = () => {
    history.push('/backend/dashboard');
  };
  onSubmit = (formValues: TeamState) => {
    this.props.addTeamMember(formValues);
  };
  render() {
    return (
      <div>
        <button onClick={this.onVoltarClicked}>Voltar</button>
        <TeamForm buttonLabel="Adicionar" onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export const AddTeamForm = connect(null, { addTeamMember })(_AddTeamForm);
