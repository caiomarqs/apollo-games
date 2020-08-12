import { ActionTypes, Action, Languages } from '../actions';
import { LOCALES } from '../i18n';

const INITIAL_STATE = {
  language: LOCALES.pt_BR,
};

export const languageReducer = (
  state: Languages = INITIAL_STATE,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.changeLanguage:
      return action.payload;
    default:
      return state;
  }
};
