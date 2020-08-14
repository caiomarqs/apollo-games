import { LogUserInAction } from './auth';
import { FetchTeamAction } from './team';
import { ChangeThemeAction } from './theme';
import { ChangeLanguageAction } from './language'
import { OverMenuAction } from './overMenu'

export enum ActionTypes {
  logUserIn,
  fetchTeam,
  changeTheme,
  changeLanguage,
  handlerOverMenu
}

export type Action = LogUserInAction | FetchTeamAction | ChangeThemeAction | ChangeLanguageAction | OverMenuAction ;
