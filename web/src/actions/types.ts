import { LogUserInAction } from './auth';
import { FetchTeamAction } from './team';
import { ChangeThemeAction } from './theme';
import { ChangeLanguageAction } from './language'

export enum ActionTypes {
  logUserIn,
  fetchTeam,
  changeTheme,
  changeLanguage
}

export type Action = LogUserInAction | FetchTeamAction | ChangeThemeAction | ChangeLanguageAction;
