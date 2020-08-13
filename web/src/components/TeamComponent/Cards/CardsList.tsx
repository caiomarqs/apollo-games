import React from 'react';

import { TeamState } from '../../../actions';
import { Card } from './Card';
import { AddCard } from './AddCard';


interface CardsListProps {
  profiles: TeamState[];
  isInDashboard: boolean;
}

export class CardsList extends React.Component<CardsListProps>{

  renderProfilesCards = (profiles: TeamState[]) => {
    return profiles.map((profile) => {
      return <Card key={profile.name} isInDashboard={this.props.isInDashboard} profile={profile} />
    })
  }

  render() {

    const { profiles, isInDashboard } = this.props;

    if (profiles) {
      if (isInDashboard === true) {
        return (
          <>
            {this.renderProfilesCards(profiles)}
            <AddCard/>
          </>
        )
      }

      return this.renderProfilesCards(profiles)
    }

    return <></>
  }
}
