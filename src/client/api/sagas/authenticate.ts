import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import decodeJwt from 'jwt-decode';

import { AuthResponse } from '@api/AuthService/types';
import { AUTHENTICATION_TYPES } from '@store/reducers/authentication/types';
import { AuthenticationAsyncRequest } from '@store/reducers/authentication/actions.types';

import { setAccessToken } from '@api/utils';
import HistoryWrapper from '@utils/historyWrapper';

import { AuthService } from '@api/index';
import { authenticateAsync } from '@store/reducers/authentication/actions';

const authService = new AuthService();

export function* authenticate(action: ReturnType<AuthenticationAsyncRequest>): SagaIterator {
  try {
    const response: AuthResponse = yield call(authService.authenticate, action.payload);

    setAccessToken(response.access_token);

    if (HistoryWrapper.history) {
      yield call(HistoryWrapper.history.push, '/admin-profile');
    }

    // todo remove nulls
    yield put(authenticateAsync.success(decodeJwt(response.access_token)));
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
