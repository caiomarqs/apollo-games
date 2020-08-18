import { ActionTypes, Action, ResponseEmail } from '../actions';

const INITIAL_STATE: ResponseEmail = {
  message: '',
};

export const sendEmailReducer = (
  state: ResponseEmail = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.sendEmail:
      return action.payload;
    default:
      return state;
  }
};
