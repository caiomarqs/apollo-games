import React from 'react';
import { connect } from 'react-redux';

import { setTestOkay } from '../actions';
import { StoreState } from '../reducers';

interface TestProps {
  setTestOkay: typeof setTestOkay;
  isWorking: boolean;
}

class _Test extends React.Component<TestProps> {
  componentDidMount() {
    this.props.setTestOkay();
  }
  render() {
    return <div>is Test working? {this.props.isWorking ? 'yes' : 'no'}</div>;
  }
}
const mapStateToProps = (state: StoreState) => {
  return { isWorking: state.test.isWorking };
};
export const Test = connect(mapStateToProps, { setTestOkay })(_Test);
