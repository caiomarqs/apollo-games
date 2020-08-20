import React from 'react';
import _ from 'lodash';

import { TeamContent } from './TeamContent';
import { TeamHeader } from './TeamHeader';
import { TabStateEnum } from '../../actions';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';

export interface tabKey {
  key: string;
  title: string;
}

const tabsKeys: tabKey[] = [
  { key: 'dev', title: 'dev' },
  { key: 'sound', title: 'Audio' },
  { key: 'prod', title: 'Produção' },
  { key: 'art', title: 'Arte' },
  { key: 'game', title: 'Game Design' },
];

interface TeamsTabProps {
  isInDashboard: boolean;
  tabState: TabStateEnum;
}

export class _TeamTabs extends React.Component<TeamsTabProps> {
  render() {
    const { tabState } = this.props;
    return (
      <div id="teamTabs">
        <TeamHeader tabsKeys={tabsKeys} />

        <div className="tab-content" id="myTabContent">
          {_.map(tabsKeys, ({ key }) => (
            <TeamContent
              isInDashboard={this.props.isInDashboard}
              key={key}
              team={key}
              active={tabState}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tabState }: StoreState) => {
  return { tabState };
};
export const TeamTabs = connect(mapStateToProps)(_TeamTabs);
