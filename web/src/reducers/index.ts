import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';
import { teamReducer } from './teamReducer';
import { User, TeamState } from '../actions';

export interface StoreState {
  auth: User;
  teams: { [key: string]: TeamState[] };
}

export const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  teams: teamReducer,
});
