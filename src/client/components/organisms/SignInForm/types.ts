import { AuthenticationAsyncRequest } from '@store/reducers/authentication/actions.types';
import { AuthenticationState } from '@store/reducers/authentication/types';

export type OwnProps = {}

export type StateProps = Pick<AuthenticationState, 'authenticationError' | 'authenticationLoading'>

export interface DispatchProps {
   authenticate: AuthenticationAsyncRequest;
}

export type Props = OwnProps & StateProps & DispatchProps;
