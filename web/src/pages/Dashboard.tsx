import React from 'react';

import { TeamTabs } from '../components/TeamTabsComponent/TeamTabs';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="container">
        <TeamTabs isInDashboard={true} />
      </div>
    );
  }
}
