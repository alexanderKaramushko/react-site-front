import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { watchUsersFetch } from './fetchUsers';
import { watchAuthenticatication } from './authenticate';

export default function* rootSaga(): SagaIterator {
  yield all([
    fork(watchUsersFetch),
    fork(watchAuthenticatication),
  ]);
}
