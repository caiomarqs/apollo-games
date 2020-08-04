import { combineReducers } from 'redux';

import { testReducer } from './testReducer';
import { Test } from '../actions';

export interface StoreState {
  test: Test;
}

export const reducers = combineReducers({
  test: testReducer,
});
