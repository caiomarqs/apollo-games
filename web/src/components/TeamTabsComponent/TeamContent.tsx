import React from 'react';
import CardList from './CardsMember';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { fetchTeam, TeamState } from '../../actions';

interface TeamProps {
  team: string;
  fetchTeam(team: string): void;
  teams: { [key: string]: TeamState[] };
  active: string;
}

class _Team extends React.Component<TeamProps> {
  active = '';

  activeTeam = () => {
    this.active += 'active show';
  };

  componentDidMount() {
    const { fetchTeam, team } = this.props;
    fetchTeam(team);
  }

  renderTeams = () => {
    const { teams, team } = this.props;

    if (team === this.props.active) {
      this.activeTeam();
    }

    if (teams) {
      return <CardList profiles={teams[team]} />;
    }

    return <></>;
  };

  render() {
    return (
      <div
        className={`tab-pane fade profiles-container ${this.active}`}
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

export const TeamContent = connect(mapStateToProps, { fetchTeam })(_Team);
