import { ActionTypes, Action, User } from '../actions';

const INITIAL_STATE = {
  password: '',
  email: '',
};

export const authReducer = (state: User = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.logUserIn:
      return action.payload;
    case ActionTypes.logUserOut:
      return action.payload;
    default:
      return state;
  }
};
