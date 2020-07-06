import { ActionType } from 'typesafe-actions';

import * as numbersActions from './actions';

export type NumbersActions = typeof numbersActions;
export type NumbersActionTypes = ActionType<NumbersActions>;

export type GetNumberAsyncRequest = NumbersActions['getNumberAsync']['request'];

export type NumbersReducerActionTypes = NumbersActionTypes;
