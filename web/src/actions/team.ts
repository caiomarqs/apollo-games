import axios from 'axios';
import { Dispatch } from 'redux';
import _ from 'lodash';

import { ActionTypes } from './types';
import { history } from '../history';
import { serialize } from 'v8';

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
    console.log(error.message);
  }
};

export const addTeamMember = (member: TeamState) => async (
  dispatch: Dispatch,
  getState: Function
) => {
  try {
    if (member.img) {
      const imgFile = new FormData();
      const data = (member.img as any) as FileList;
      imgFile.append('img', data[0] as string | Blob);

      const img = await (
        await axios.post<string>('/api/service/add/image', imgFile)
      ).data;
      member.img = img;
    }
    if (!member.contacts) {
      member.contacts = {};
    }

    const response = await axios.post<TeamState[]>(
      '/api/team/add/member',
      _.omit(member, '_id')
    );

    const updated = [...getState().teams[member.team], response.data];

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

export const updateTeamMember = (member: TeamState) => async (
  dispatch: Dispatch,
  getState: Function
) => {
  try {
    if (typeof member.img !== 'string' && member.img) {
      const older = _.filter(getState().teams[member.team], (m) => {
        return m._id === member._id;
      });
      const older_img = older[0].img;

      await axios.delete(`/api/service/delete/image/${older_img}`);

      const imgFile = new FormData();
      const data = (member.img as any) as FileList;
      imgFile.append('img', data[0] as string | Blob);

      const img = await (
        await axios.post<string>('/api/service/add/image', imgFile)
      ).data;
      member.img = img;
    }

    await axios.patch<TeamState[]>(
      `/api/team/update/member/${member._id}`,
      _.omit(member, '_id')
    );

    const withoutUnUpdatedMember = _.map(getState().teams, (m) => {
      let team = _.map(m, (n) => {
        if (n._id !== member._id) {
          return n;
        }
      });
      team = team.filter((element) => {
        return element !== undefined;
      });
      return team;
    });

    const updated = _.map(withoutUnUpdatedMember, (m) => {
      if (m[0].team === member.team) {
        m.push(member);
        return m;
      } else {
        return m;
      }
    });

    const makeObjectsWithArray = _.map(updated, (m) => {
      return { [m[0].team]: m };
    });
    const serializeUpdated = _.merge({}, ...makeObjectsWithArray);
    dispatch<FetchTeamAction>({
      type: ActionTypes.fetchTeam,
      payload: serializeUpdated,
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
    if (
      member.img !== 'null' &&
      member.img !== null &&
      member.img !== undefined
    ) {
      await axios.delete(`/api/service/delete/image/${member.img}`);
    }

    await axios.delete<TeamState>(`/api/team/delete/member/${member._id}`);

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
