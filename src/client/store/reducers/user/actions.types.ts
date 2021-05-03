import { ActionType } from 'typesafe-actions';

import * as userActions from './actions';

export type UserActions = typeof userActions;
export type UserActionTypes = ActionType<UserActions>;

export type UpdateUser = UserActions['updateUser'];

export type UserReducerActionTypes = UserActionTypes;
