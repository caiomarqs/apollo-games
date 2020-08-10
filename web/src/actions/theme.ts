import { ActionTypes } from './types';

export interface Theme {
  navTheme: navThemeEnum;
  navMenus: boolean;
}
export interface ChangeThemeAction {
  type: ActionTypes.changeTheme;
  payload: Theme;
}

export enum navThemeEnum {
  DARK = 'DARK',
  WHITE = 'WHITE',
}

export const changeTheme = (
  navTheme: navThemeEnum,
  navMenus: boolean
): ChangeThemeAction => {
  return { type: ActionTypes.changeTheme, payload: { navTheme, navMenus } };
};
