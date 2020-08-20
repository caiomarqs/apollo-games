import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';
import { teamReducer } from './teamReducer';
import { themeReducer } from './themeReducer';
import { languageReducer } from './languagesReducer';
import { overMenuReducer } from './overMenuReducer';
import { sendEmailReducer } from './sendEmailReducer';
import { tabStateReducer } from './tabStateReducer';
import {
  User,
  TeamState,
  Theme,
  Languages,
  OverMenu,
  ResponseEmail,
  TabStateEnum,
} from '../actions';

export interface StoreState {
  auth: User;
  teams: { [key: string]: TeamState[] };
  theme: Theme;
  languages: Languages;
  overMenu: OverMenu;
  emailMessage: ResponseEmail;
  tabState: TabStateEnum;
}

export const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  teams: teamReducer,
  theme: themeReducer,
  languages: languageReducer,
  overMenu: overMenuReducer,
  emailMessage: sendEmailReducer,
  tabState: tabStateReducer,
});
