import React from 'react';
// import { Tabs, Tab } from 'react-bootstrap';
import _ from 'lodash';

import { Team } from './teams/Team';
import { history } from '../../history';

interface TeamsTabProps {}

const tabs = [
  { key: 'dev', title: 'Desenvolvimento' },
  { key: 'sound', title: 'Audio' },
  { key: 'prod', title: 'Produção' },
  { key: 'art', title: 'Arte' },
  { key: 'game', title: 'Game Design' },
];

export class TeamsTab extends React.Component<TeamsTabProps> {
  state = {
    key: 'dev',
  };

  onAddButtonClicked = () => {
    history.push('/backend/dashboard/team/add/member');
  };
  render() {
    return (
      <div>
        <button onClick={this.onAddButtonClicked}>Add</button>
        {/* <Tabs
          activeKey={this.state.key}
          onSelect={(k) => this.setState({ key: k })}
          id="controlled-tab-example"
        >
          {_.map(tabs, ({ key, title }) => {
            return (
              <Tab key={key} eventKey={key} title={title}>
                <Team team={key} />
              </Tab>
            );
          })}
        </Tabs> */}
      </div>
    );
  }
}
