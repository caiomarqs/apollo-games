import { LogUserInAction } from './auth';
import { FetchTeamAction } from './team';

export enum ActionTypes {
  logUserIn,
  fetchTeam,
}

export type Action = LogUserInAction | FetchTeamAction;
