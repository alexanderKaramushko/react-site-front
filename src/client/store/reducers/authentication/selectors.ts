import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

import { AuthenticationState } from './types';

const getAuthenticationState = (state: RootState): AuthenticationState => state.authenticationReducer;

export const getAuthenticationError = createSelector(
  getAuthenticationState,
  (authentication: AuthenticationState) => authentication.authenticationError,
);

export const getAuthenticationLoading = createSelector(
  getAuthenticationState,
  (authentication: AuthenticationState) => authentication.authenticationLoading,
);