import axios from 'axios';
import { Dispatch } from 'redux';
import _ from 'lodash';

import { ActionTypes } from './types';
import { StoreState } from '../reducers';
import { history } from '../history';

export interface TeamState {
  team: string;
  name: string;
  img?: string;
  _id?: string;
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

export const updateTeamMember = (member: TeamState) => async (
  dispatch: Dispatch,
  getState: Function
) => {
  try {
    await axios.patch<TeamState[]>(
      `/api/team/update/member/${member._id}`,
      _.omit(member, '_id')
    );

    const index = _.findIndex(getState().teams[member.team], {
      _id: member._id,
    });
    const updated = getState().teams[member.team].splice(index, 1, member);
    const res = {
      [member.team]: updated,
    } as { [key: string]: TeamState[] };

    dispatch<FetchTeamAction>({
      type: ActionTypes.fetchTeam,
      payload: res,
    });

    history.push('/backend/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const addTeamMember = (member: TeamState) => async (
  dispatch: Dispatch
) => {
  try {
    const response = await axios.post<TeamState[]>(
      '/api/team/add/member',
      _.omit(member, '_id')
    );
    const res = {
      [member.team]: response.data,
    } as { [key: string]: TeamState[] };

    dispatch<FetchTeamAction>({
      type: ActionTypes.fetchTeam,
      payload: res,
    });

    history.push('/backend/dashboard');
  } catch (error) {
    console.log(error);
  }
};

export const deleteTeamMember = (member: TeamState) => async (
  dispatch: Dispatch,
  getState: Function
) => {
  try {
    await axios.delete<TeamState[]>(`/api/team/delete/member/${member._id}`);

    const res = {
      [member.team]: _.filter(getState().teams[member.team], (oldMember) => {
        return oldMember._id !== member._id;
      }),
    } as { [key: string]: TeamState[] };

    dispatch<FetchTeamAction>({
      type: ActionTypes.fetchTeam,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
