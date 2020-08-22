import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { TeamForm } from './TeamForm';
import { history } from '../../../history';
import {
  TeamState,
  updateTeamMember,
  changeTabState,
  TabStateEnum,
} from '../../../actions';
import { StoreState } from '../../../reducers';

interface UpdateTeamFormProps {
  updateTeamMember(member: TeamState): void;
  changeTabState: typeof changeTabState;
  match: {
    params: {
      id: string;
      team: string;
    };
  };
  member: TeamState;
}

class _UpdateTeamForm extends React.Component<UpdateTeamFormProps> {
  onVoltarClicked = () => {
    history.push('/backend/dashboard');
  };
  onSubmit = (formValues: TeamState) => {
    this.props.changeTabState(formValues.team as TabStateEnum);
    this.props.updateTeamMember(formValues);
  };
  render() {
    return (
      <div className="container update-container">
        <button className="back-btn" onClick={this.onVoltarClicked}>
          Voltar
        </button>
        <TeamForm
          buttonLabel="Atualizar"
          initialValues={this.props.member}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState, MyProps: UpdateTeamFormProps) => {
  const { id, team } = MyProps.match.params;

  const member = _.filter(state.teams[team], (possibleMember) => {
    return possibleMember._id === id;
  });

  return { member: member[0] };
};

export const UpdateTeamForm = connect(mapStateToProps, {
  updateTeamMember,
  changeTabState,
})(_UpdateTeamForm);
