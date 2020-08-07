import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { StoreState } from '../../../reducers';
import { fetchTeam, TeamState, deleteTeamMember } from '../../../actions';
import { history } from '../../../history';

interface TeamProps {
  team: string;
  fetchTeam(team: string): void;
  deleteTeamMember(member: TeamState): void;
  teams: { [key: string]: TeamState[] };
}

class _Team extends React.Component<TeamProps> {
  componentDidMount() {
    const { fetchTeam, team } = this.props;
    fetchTeam(team);
  }

  onDeleteClicked = (member: TeamState) => {
    this.props.deleteTeamMember(member);
  };

  onUpdateClicked = (id: string, team: string) => {
    history.push(`/backend/dashboard/team/update/member/${id}/${team}`);
  };

  renderTeams = () => {
    const { teams, team } = this.props;

    if (teams) {
      return _.map(teams[team], (member) => {
        return (
          <div key={member._id}>
            <div>Nome: {member.name}</div>
            <div>Cargo: {member.desc}</div>
            <button
              onClick={() =>
                this.onUpdateClicked(member._id as string, member.team)
              }
            >
              Update
            </button>
            <button onClick={() => this.onDeleteClicked(member)}>Delete</button>
          </div>
        );
      });
    }

    return <div>Loading...</div>;
  };

  render() {
    return <div>{this.renderTeams()}</div>;
  }
}

const mapStateToProps = (state: StoreState) => {
  return { teams: state.teams };
};

export const Team = connect(mapStateToProps, {
  fetchTeam,
  deleteTeamMember,
})(_Team);
