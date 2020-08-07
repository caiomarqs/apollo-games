import React from 'react';

import TeamsTab from '../components/backend/TeamsTab';

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <a href="/api/logout">Log Out</a>
        <TeamsTab />
      </div>
    );
  }
}
