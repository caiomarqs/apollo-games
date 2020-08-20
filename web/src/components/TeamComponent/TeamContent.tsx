import React from 'react';
import { connect } from 'react-redux';

import { CardsList } from './Cards/CardsList';
import { StoreState } from '../../reducers';
import {
  fetchTeam,
  TeamState,
  deleteTeamMember,
  TabStateEnum,
} from '../../actions';

interface TeamProps {
  team: string;
  fetchTeam(team: string): void;
  deleteTeamMember(member: TeamState): void;
  teams: { [key: string]: TeamState[] };
  active: TabStateEnum;
  isInDashboard: boolean;
}

class _TeamContent extends React.Component<TeamProps> {
  activeTeam = (isActive: boolean) => {
    if (isActive) {
      this.setState({ active: 'active show' });
    } else {
    }
  };

  componentDidMount() {
    const { fetchTeam, team, teams } = this.props;
    if (teams[team] === undefined) {
      fetchTeam(team);
    } else {
      this.forceUpdate();
    }
  }

  renderTeams = () => {
    const { teams, team, isInDashboard } = this.props;

    return <CardsList isInDashboard={isInDashboard} profiles={teams[team]} />;
  };

  render() {
    const { team, active } = this.props;
    const isActive = team === active;
    return (
      <div
        className={`tab-pane fade profiles-container ${
          isActive ? 'active show' : ''
        }`}
        id={`${this.props.team}`}
        role="tabpanel"
        aria-labelledby={`${this.props.team}-tab`}
      >
        <ul id={`${this.props.team}-tab`}>{this.renderTeams()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state: StoreState) => {
  return { teams: state.teams };
};

export const TeamContent = connect(mapStateToProps, {
  fetchTeam,
  deleteTeamMember,
})(_TeamContent);
