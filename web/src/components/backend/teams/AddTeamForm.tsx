import React from 'react';
import { connect } from 'react-redux';

import { TeamForm } from './TeamForm';
import { history } from '../../../history';
import { TeamState, addTeamMember, TabStateEnum } from '../../../actions';
import { StoreState } from '../../../reducers';

interface AddTeamFormProps {
  addTeamMember(member: TeamState): void;
  team: TabStateEnum;
}

class _AddTeamForm extends React.Component<AddTeamFormProps> {
  onVoltarClicked = () => {
    history.push('/backend/dashboard');
  };
  onSubmit = (formValues: TeamState) => {
    this.props.addTeamMember(formValues);
  };
  render() {
    const { team } = this.props;
    return (
      <div className="container add-container">
        <button className="back-btn" onClick={this.onVoltarClicked}>
          Voltar
        </button>
        <TeamForm
          buttonLabel="Adicionar"
          initialValues={{ team }}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ tabState }: StoreState) => {
  return { team: tabState };
};

export const AddTeamForm = connect(mapStateToProps, { addTeamMember })(
  _AddTeamForm
);
