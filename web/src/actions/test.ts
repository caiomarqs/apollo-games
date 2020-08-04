import { ActionTypes } from './types';

export interface Test {
  isWorking: boolean;
}

export interface SetTestOkayAction {
  type: ActionTypes.setTestOkay;
  payload: Test;
}

export const setTestOkay = (): SetTestOkayAction => {
  return { type: ActionTypes.setTestOkay, payload: { isWorking: true } };
};
