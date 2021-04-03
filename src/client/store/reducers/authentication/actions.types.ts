import { ActionType } from 'typesafe-actions';
import * as authenticationActions from './actions';

export type AuthenticationActions = typeof authenticationActions;
export type AuthenticationActionTypes = ActionType<AuthenticationActions>;

export type AuthenticationAsyncRequest = AuthenticationActions['authenticateAsync']['request'];
export type AuthenticationAsyncSuccess = AuthenticationActions['authenticateAsync']['success'];
export type AuthenticationAsyncFailure = AuthenticationActions['authenticateAsync']['failure'];

export type AuthenticationReducerActionTypes = AuthenticationActionTypes;
