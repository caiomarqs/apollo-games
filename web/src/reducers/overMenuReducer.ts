import { ActionTypes, Action, OverMenu } from '../actions';

const INITIAL_STATE = { 
    openMenu: false
};

export const overMenuReducer = (state: OverMenu = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.handlerOverMenu:
      return action.payload;
    default:
      return state;
  }
};
