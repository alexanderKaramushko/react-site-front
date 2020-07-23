import { all, fork } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { watchUsersFetch } from './fetchUsers';

export default function* rootSaga(): SagaIterator {
    yield all([fork(watchUsersFetch)]);
}
