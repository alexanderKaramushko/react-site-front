import { createReducer } from 'typesafe-actions';
import { AuthenticationState } from './types';
import { AuthenticationReducerActionTypes } from './actions.types';
import { authenticateAsync } from './actions';

const initialState: AuthenticationState = {
  authenticationError: null,
  authenticationLoading: false,
};

export default createReducer<AuthenticationState, AuthenticationReducerActionTypes>(initialState)
  .handleAction(
    authenticateAsync.request,
    (state): AuthenticationState => ({
      ...state, authenticationError: null, authenticationLoading: true,
    }),
  )
  .handleAction(
    authenticateAsync.success,
    (state): AuthenticationState => ({
      ...state, authenticationError: null, authenticationLoading: false,
    }),
  )
  .handleAction(
    authenticateAsync.failure,
    (state, action): AuthenticationState => ({
      ...state, authenticationError: action.payload, authenticationLoading: false,
    }),
  );
