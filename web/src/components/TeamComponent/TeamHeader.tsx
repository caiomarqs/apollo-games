import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

import { history } from '../../history';
import { tabKey } from './index';
import { TabStateEnum, changeTabState } from '../../actions';
import { StoreState } from '../../reducers';

interface TeamHeaderProps {
  tabsKeys: tabKey[];
  changeTabState: typeof changeTabState;
  tabState: string;
}

export class _TeamHeader extends React.Component<TeamHeaderProps> {
  active = '';

  activeTeam = () => {
    this.active += 'active show';
  };

  onAddButtonClicked = () => {
    history.push('/backend/dashboard/team/add/member');
  };

  onTabClick = (tabState: string) => {
    this.props.changeTabState(tabState as TabStateEnum);
  };

  renderTabs = (tabsKeys: tabKey[]) =>
    _.map(tabsKeys, ({ key, title }) => {
      const firstTab = key === this.props.tabState ? 'active' : '';

      return (
        <li key={key} className="nav-item" role="presentation">
          <a
            key={key}
            className={`nav-link btn-font ${firstTab}`}
            id={`${key}-tab`}
            data-toggle="tab"
            onClick={() => this.onTabClick(key)}
            href={`#${key}`}
            role="tab"
            aria-controls={key}
            aria-selected="true"
          >
            {title}
          </a>
        </li>
      );
    });

  render() {
    return (
      <ul className="nav nav-tabs noselect" id="myTab" role="tablist">
        <h2>Time</h2>
        {this.renderTabs(this.props.tabsKeys)}
      </ul>
    );
  }
}

const mapStateToProps = ({ tabState }: StoreState) => {
  return { tabState };
};

export const TeamHeader = connect(mapStateToProps, { changeTabState })(
  _TeamHeader
);
