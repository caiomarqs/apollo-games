import { ActionTypes, Action, Theme, navThemeEnum } from '../actions';

const INITIAL_STATE = {
  navTheme: navThemeEnum.WHITE,
  navMenus: false,
};

export const themeReducer = (state: Theme = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.changeTheme:
      return action.payload;
    default:
      return state;
  }
};
