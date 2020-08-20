import { ActionTypes } from './types';

export interface ChangeTabStateAction {
  type: ActionTypes.changeTabState;
  payload: TabStateEnum;
}

export type TabStateEnum = 'dev' | 'sound' | 'prod' | 'art' | 'game';

export const changeTabState = (
  tabState: TabStateEnum
): ChangeTabStateAction => {
  return { type: ActionTypes.changeTabState, payload: tabState };
};
