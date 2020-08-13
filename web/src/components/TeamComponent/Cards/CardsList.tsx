import React from 'react';

import { TeamState } from '../../../actions';
import { Card } from './Card';


interface CardsListProps {
  profiles: TeamState[];
  isInDashboard: boolean;
}

export class CardsList extends React.Component<CardsListProps>{

  render() {

    const { profiles, isInDashboard } = this.props;

    if (profiles) {
      return profiles.map((profile) => {
        return <Card isInDashboard={isInDashboard} profile={profile} />
      })
    }

    return <></>
  }
}
