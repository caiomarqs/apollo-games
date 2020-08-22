import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface Email {
  name: string;
  from: string;
  subject: string;
  text: string;
}

export interface ResponseEmail {
  message: string;
}

export interface SendEmailAction {
  type: ActionTypes.sendEmail;
  payload: ResponseEmail;
}

export const sendEmailTo = (email: Email) => async (dispatch: Dispatch) => {
  try {
    const res = await axios.post<ResponseEmail>(
      '/api/service/send/email',
      email
    );

    dispatch<SendEmailAction>({
      type: ActionTypes.sendEmail,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
