import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';
import { teamReducer } from './teamReducer';
import { User, Team } from '../actions';

export interface StoreState {
  auth: User;
  teams: { [key: string]: Team[] };
}

export const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  teams: teamReducer,
});
