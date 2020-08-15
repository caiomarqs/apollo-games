import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';
import { history } from '../history';

export interface User {
  password: string;
  email: string;
  _id?: string;
  message?: string;
}

export interface LogUserInAction {
  type: ActionTypes.logUserIn;
  payload: User;
}

export interface LogUserOutAction {
  type: ActionTypes.logUserOut;
  payload: User;
}

export const logUserIn = (userData: User) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.post<User>('/api/fetch/user', userData);

    dispatch<LogUserInAction>({
      type: ActionTypes.logUserIn,
      payload: response.data,
    });

    const message = response.data.message;

    if (!message) {
      history.push('/backend/dashboard');
    }

    return message;
  } catch (error) {
    console.log(error);
  }
};

export const logUserOut = () => {
  return {
    type: ActionTypes.logUserOut,
    payload: {
      password: '',
      email: '',
    },
  };
};
