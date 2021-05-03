import { createSelector } from 'reselect';

import { AuthenticationState } from './types';

import { RootState } from '../rootReducer';

const getAuthenticationState = (state: RootState): AuthenticationState => state.authenticationReducer;

export const getAuthenticationError = createSelector(
  getAuthenticationState,
  (authentication: AuthenticationState) => authentication.authenticationError,
);

export const getAuthenticationLoading = createSelector(
  getAuthenticationState,
  (authentication: AuthenticationState) => authentication.authenticationLoading,
);
