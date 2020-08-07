import { ActionTypes, Action, TeamState } from '../actions';

export const teamReducer = (
  state: { [key: string]: TeamState[] } = {},
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchTeam:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
