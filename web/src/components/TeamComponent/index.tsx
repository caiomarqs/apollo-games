import React from 'react'
import _ from 'lodash'

import { TeamContent } from './TeamContent'
import { TeamHeader } from './TeamHeader'

export interface tabKey {
  key: string,
  title: string
}

const tabsKeys: tabKey[] = [
  { key: 'dev', title: 'dev' },
  { key: 'sound', title: 'Audio' },
  { key: 'prod', title: 'Produção' },
  { key: 'art', title: 'Arte' },
  { key: 'game', title: 'Game Design' },
]

interface TeamsTabProps {
  isInDashboard: boolean
}

export class TeamTabs extends React.Component<TeamsTabProps> {
  render() {
    return (
      <div id="teamTabs">
        <TeamHeader isInDashboard={this.props.isInDashboard} tabsKeys={tabsKeys} />

        <div className="tab-content" id="myTabContent">
          { _.map(tabsKeys, ({ key }) => <TeamContent isInDashboard={this.props.isInDashboard} key={key} team={key} active="dev" />)}
        </div>
      </div>
    )
  }
}