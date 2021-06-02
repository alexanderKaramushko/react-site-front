import { connect } from 'react-redux';

import { StateProps, DispatchProps, OwnProps } from './types';

import { RootState } from '@store/reducers/rootReducer';
import { getAuthenticationError, getAuthenticationLoading, getAuthenticationDecodedJWTToken } from '@store/reducers/authentication/selectors';

import App from './App.component';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  (state) => ({
    authenticationError: getAuthenticationError(state),
    authenticationLoading: getAuthenticationLoading(state),
    decodedJWTToken: getAuthenticationDecodedJWTToken(state),
  }),
)(App);
