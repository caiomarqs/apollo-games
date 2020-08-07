import React from 'react';

import { TeamsTab } from '../components/backend/TeamsTab';

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <a href="/api/logout">Log Out</a>
        <TeamsTab />
        {/* <Team team="dev" />
        <Team team="sound" />
        <Team team="prod" />
        <Team team="art" />
        <Team team="game" /> */}
      </div>
    );
  }
}
