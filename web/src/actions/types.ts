import { LogUserInAction } from './auth';
import { FetchTeamAction } from './team';
import { ChangeThemeAction } from './theme';

export enum ActionTypes {
  logUserIn,
  fetchTeam,
  changeTheme,
}

export type Action = LogUserInAction | FetchTeamAction | ChangeThemeAction;
