import React from 'react'
import { connect } from 'react-redux'

import { CardsList } from './Cards/CardsList'
import { StoreState } from '../../reducers'
import { fetchTeam, TeamState, deleteTeamMember } from '../../actions'

interface TeamProps {
  team: string
  fetchTeam(team: string): void
  deleteTeamMember(member: TeamState): void
  teams: { [key: string]: TeamState[] }
  active: string
  isInDashboard: boolean
}

class _TeamContent extends React.Component<TeamProps> {

  active = ''

  activeTeam = () => {
    this.active += 'active show'
  }

  componentDidMount() {
    const { fetchTeam, team, teams } = this.props
    if (teams[team] === undefined) {
      fetchTeam(team)
    } else {
      this.forceUpdate()
    }
  }

  renderTeams = () => {
    const { teams, team, isInDashboard } = this.props

    if (team === this.props.active) {
      this.activeTeam()
    }
    return <CardsList isInDashboard={isInDashboard} profiles={teams[team]} />
  }

  render() {
    return (
      <div className={`tab-pane fade profiles-container ${this.active}`} id={`${this.props.team}`} role="tabpanel" aria-labelledby={`${this.props.team}-tab`} >
        <ul id={`${this.props.team}-tab`}>
          {this.renderTeams()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state: StoreState) => {
  return { teams: state.teams }
}

export const TeamContent = connect(mapStateToProps, { fetchTeam, deleteTeamMember })(_TeamContent)
