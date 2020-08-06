import { ActionTypes, Action, User } from '../actions';

const INITIAL_STATE = {
  _id: '',
  password: '',
  email: '',
  message: '',
};

export const authReducer = (state: User = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.logUserInAction:
      return action.payload;
    default:
      return state;
  }
};
