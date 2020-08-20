import { LogUserInAction, LogUserOutAction } from './auth';
import { FetchTeamAction } from './team';
import { ChangeThemeAction } from './theme';
import { ChangeLanguageAction } from './language';
import { OverMenuAction } from './overMenu';
import { SendEmailAction } from './sendEmail';
import { ChangeTabStateAction } from './tabState';

export enum ActionTypes {
  logUserIn,
  logUserOut,
  fetchTeam,
  changeTheme,
  changeLanguage,
  handlerOverMenu,
  sendEmail,
  changeTabState,
}

export type Action =
  | LogUserInAction
  | LogUserOutAction
  | FetchTeamAction
  | ChangeThemeAction
  | ChangeLanguageAction
  | OverMenuAction
  | SendEmailAction
  | ChangeTabStateAction;
