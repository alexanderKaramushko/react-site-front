import { BaseAction, actionIds } from './common';

export const numberRequestStartAction = (): BaseAction => ({
    payload: null,
    type: actionIds.GET_NUMBER_REQUEST_START,
});

export const numberRequestCompletedAction = (
    numberGenerated: number,
): BaseAction => ({
    payload: numberGenerated,
    type: actionIds.GET_NUMBER_REQUEST_COMPLETED,
});
