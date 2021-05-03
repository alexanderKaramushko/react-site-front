import { createReducer } from 'typesafe-actions';

import { UserState } from './types';
import { UserReducerActionTypes } from './actions.types';

import { updateUser } from './actions';

const initialState: UserState = {
  user: null,
};

export default createReducer<UserState, UserReducerActionTypes>(initialState)
  .handleAction(
    updateUser,
    (state, action): UserState => ({
      ...state, ...action.payload,
    }),
  );
