import axios from 'axios';
import { Dispatch } from 'redux';

import { ActionTypes } from './types';

export interface TeamState {
  team: string;
  name: string;
  img?: string;
  _id: string;
  desc: string;
  contacts?: Contacts;
}

export interface Contacts {
  linkedin?: string;
  soundcloud?: string;
  site?: string;
  git?: string;
  twitter?: string;
  artstation?: string;
  instagram?: string;
}

export interface FetchTeamAction {
  type: ActionTypes.fetchTeam;
  payload: { [key: string]: TeamState[] };
}

export const fetchTeam = (team: string) => async (dispatch: Dispatch) => {
  try {
    const response = await axios.get<TeamState[]>(`/api/team/fetch/${team}`);

    const res = {
      [team]: response.data,
    };

    dispatch<FetchTeamAction>({
      type: ActionTypes.fetchTeam,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
