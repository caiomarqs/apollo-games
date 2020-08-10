import { ActionTypes } from './types';
import { LOCALES } from '../i18n'

export interface Languages {
    language: LOCALES
}
export interface ChangeLanguageAction {
  type: ActionTypes.changeLanguage;
  payload: Languages;
}


export const changeLanguage = (
    language: LOCALES
): ChangeLanguageAction => {
  return { type: ActionTypes.changeLanguage , payload: { language } };
};
