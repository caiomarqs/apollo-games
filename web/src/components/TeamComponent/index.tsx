import React from 'react';
import _ from 'lodash';

import { TeamContent } from './TeamContent';
import { TeamHeader } from './TeamHeader';
import { TabStateEnum } from '../../actions';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import { FormattedMessage } from 'react-intl';

export interface tabKey {
  key: string;
  title: JSX.Element;
}

const tabsKeys: tabKey[] = [
  { key: 'dev', title: <FormattedMessage id="team.dev"/> },
  { key: 'sound', title: <FormattedMessage id="team.audio"/> },
  { key: 'prod', title: <FormattedMessage id="team.production"/> },
  { key: 'art', title: <FormattedMessage id="team.art"/> },
  { key: 'game', title: <FormattedMessage id="team.gamedesign"/> },
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
