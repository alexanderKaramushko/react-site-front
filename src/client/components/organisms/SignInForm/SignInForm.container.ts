import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { StateProps, DispatchProps, OwnProps } from './types';
import { AuthRequestPayload } from '../../../api/AuthService/types';
import { AuthenticationAsyncRequest } from '../../../store/reducers/authentication/actions.types';

import { RootState } from '../../../store/reducers/rootReducer';
import { getAuthenticationError, getAuthenticationLoading } from '../../../store/reducers/authentication/selectors';
import { authenticateAsync } from '../../../store/reducers/authentication/actions';

import SignInFormComponent from './SignInForm.component';

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  (state) => ({
    authenticationError: getAuthenticationError(state),
    authenticationLoading: getAuthenticationLoading(state),
  }),
  (dispatch: Dispatch) => ({
    // eslint-disable-next-line max-len
    authenticate: (requestPayload: AuthRequestPayload): ReturnType<AuthenticationAsyncRequest> => dispatch(authenticateAsync.request(requestPayload)),
  }),
)(SignInFormComponent);
