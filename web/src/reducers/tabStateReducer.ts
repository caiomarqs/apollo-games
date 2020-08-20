import { ActionTypes, Action, TabStateEnum } from '../actions';

export const tabStateReducer = (
  state: TabStateEnum = 'dev',
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.changeTabState:
      return action.payload;
    default:
      return state;
  }
};
