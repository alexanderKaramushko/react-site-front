import { takeEvery, put, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import MainService from '../MainService';
import { USERS_TYPES } from '../../store/reducers/users/types';
import { Users } from '../../models/base/Users';
import { getUsersAsync } from '../../store/reducers/users/actions';

const mainService = new MainService();

export function* fetchUsers(): SagaIterator {
    try {
        const response: Users = yield call(mainService.read.bind(mainService));

        yield put(getUsersAsync.success(response));
    } catch (error) {
        yield put(getUsersAsync.failure(error));
    }
}

export function* watchUsersFetch(): SagaIterator {
    yield takeEvery(USERS_TYPES.GET_USERS_ASYNC_REQUEST, fetchUsers);
}
