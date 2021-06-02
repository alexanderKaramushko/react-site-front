import { AuthenticationState } from '@store/reducers/authentication/types';

export type OwnProps = {}

export type StateProps = Pick<AuthenticationState, 'authenticationError' | 'authenticationLoading' | 'decodedJWTToken'>

export type DispatchProps = {};

export type Props = OwnProps & StateProps & DispatchProps;
