import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { StoreState } from '../../reducers';
import { fetchTeam, TeamState } from '../../actions';

interface TeamProps {
  team: string;
  fetchTeam(team: string): void;
  teams: { [key: string]: TeamState[] };
}

class _Team extends React.Component<TeamProps> {
  componentDidMount() {
    const { fetchTeam, team } = this.props;
    fetchTeam(team);
  }

  renderTeams = () => {
    const { teams, team } = this.props;

    if (teams) {
      return _.map(teams[team], (member) => {
        return <div key={member._id}>{member.name}</div>;
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

export const Team = connect(mapStateToProps, { fetchTeam })(_Team);
