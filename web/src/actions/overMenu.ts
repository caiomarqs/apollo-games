import { ActionTypes } from './types';

export interface OverMenu {
    openMenu: boolean;
}

export interface OverMenuAction {
    type: ActionTypes.handlerOverMenu;
    payload: OverMenu;
}

export const handlerOverMenu = (openMenu: boolean): OverMenuAction => {
    return { type: ActionTypes.handlerOverMenu, payload: { openMenu } };
};
