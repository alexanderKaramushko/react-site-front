import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import jwtDecode from 'jwt-decode';

import { AuthResponse } from '../AuthService/types';
import { AUTHENTICATION_TYPES } from '../../store/reducers/authentication/types';
import { AuthenticationAsyncRequest } from '../../store/reducers/authentication/actions.types';
import { UserFromJwt } from '../../models/base/UserFromJwt';

import { AuthService } from '..';
import { authenticateAsync } from '../../store/reducers/authentication/actions';
import { updateUser } from '../../store/reducers/user/actions';

const authService = new AuthService();

export function* authenticate(action: ReturnType<AuthenticationAsyncRequest>): SagaIterator {
  try {
    const response: AuthResponse = yield call(authService.authenticate, action.payload);
    const { username } = jwtDecode<UserFromJwt>(response.access_token);

    yield put(updateUser({ username }));

    // todo remove nulls
    yield put(authenticateAsync.success(null, null));
  } catch (error) {
    yield put(authenticateAsync.failure(error.message));
  }
}

export function* watchAuthenticatication(): SagaIterator {
  yield takeEvery(
    AUTHENTICATION_TYPES.AUTHENTICATION_ASYNC_REQUEST,
    (action: ReturnType<AuthenticationAsyncRequest>) => authenticate(action),
  );
}
