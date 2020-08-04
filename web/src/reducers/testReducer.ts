import { ActionTypes, Action, Test } from '../actions';

const INITIAL_STATE = {
  isWorking: false,
};

export const testReducer = (state: Test = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.setTestOkay:
      return action.payload;
    default:
      return state;
  }
};
