import React from 'react';

import { TeamTabs } from '../components/TeamTabsComponent/TeamTabs';

export class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <a href="/api/logout">Log Out</a>
        <TeamTabs isInDashboard={true} />
      </div>
    );
  }
}
