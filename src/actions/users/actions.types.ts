import { ActionType } from 'typesafe-actions';

import * as usersActions from './actions';

export type UsersActions = typeof usersActions;
export type UsersActionTypes = ActionType<UsersActions>;

export type GetUsersAsyncRequest = UsersActions['getUsersAsync']['request'];
export type GetUsersAsyncSuccess = UsersActions['getUsersAsync']['success'];
export type GetUsersAsyncFailure = UsersActions['getUsersAsync']['failure'];

export type UsersReducerActionTypes = UsersActionTypes;
