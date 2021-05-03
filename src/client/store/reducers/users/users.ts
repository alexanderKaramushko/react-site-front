import { createReducer } from 'typesafe-actions';

import { UsersState } from './types';
import { UsersReducerActionTypes } from './actions.types';

import { getUsersAsync } from './actions';

const initialState: UsersState = {
  users: null,
  usersError: '',
  usersLoading: false,
};

export const usersReducer = createReducer<UsersState, UsersReducerActionTypes>(initialState)
  .handleAction(
    getUsersAsync.request,
    (state): UsersState => ({
      ...state, usersError: null, usersLoading: true,
    }),
  )
  .handleAction(
    getUsersAsync.success,
    (state, action): UsersState => ({
      ...state, users: action.payload, usersError: null, usersLoading: false,
    }),
  )
  .handleAction(
    getUsersAsync.failure,
    (state, action): UsersState => ({
      ...state, usersError: action.payload, usersLoading: false,
    }),
  );
