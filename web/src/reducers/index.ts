import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { authReducer } from './authReducer';
import { User } from '../actions';

export interface StoreState {
  auth: User;
}

export const reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
});
