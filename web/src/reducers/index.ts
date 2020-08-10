import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';
import { teamReducer } from './teamReducer';
import { themeReducer } from './themeReducer';
import { languageReducer } from './languagesReducer'
import { User, TeamState, Theme, Languages } from '../actions';

export interface StoreState {
  auth: User;
  teams: { [key: string]: TeamState[] };
  theme: Theme;
  languages: Languages;
}

export const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  teams: teamReducer,
  theme: themeReducer,
  languages: languageReducer
});
