import { ActionTypes } from './types';

export interface OverMenu {
    openMenu: boolean;
}

export interface OverMenuAction {
    type: ActionTypes.handlerOverMenu;
    payload: OverMenu;
}

export const handlerOverMenu = (openMenu: boolean): OverMenuAction => {
    
    if(openMenu){
        document.body.style.overflow = 'hidden'
    }
    else{
        document.body.style.overflow = 'unset'
    }

    return { type: ActionTypes.handlerOverMenu, payload: { openMenu } };
};
