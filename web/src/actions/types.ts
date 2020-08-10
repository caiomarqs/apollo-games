import { LogUserInAction } from './auth';
import { FetchTeamAction } from './team';
import { SetInitialTheme } from './theme'

export enum ActionTypes {
  logUserIn,
  fetchTeam,
  setIntialTheme
}

export type Action = LogUserInAction | FetchTeamAction | SetInitialTheme;
