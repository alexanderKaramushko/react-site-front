import { BaseAction, actionIds } from '../common';

export type NumberCollectionState = number[];

export const numberCollectionReducer = (
    state: NumberCollectionState = [0],
    action: BaseAction,
): NumberCollectionState => {
    switch (action.type) {
    case actionIds.GET_NUMBER_REQUEST_COMPLETED:
        return [...state, action.payload];
    default:
        return state;
    }
};
