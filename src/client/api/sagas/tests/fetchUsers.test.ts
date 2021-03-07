import { SagaIterator } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import { fetchUsers } from '../fetchUsers';
import MainService from '../../MainService';
import { getUsersAsync } from '../../../store/reducers/users/actions';
import { Users } from '../../../models/base/Users';

const mainService: MainService = new MainService();

describe('fetchUsers', () => {
  it('+++ try fetchUsers', () => {
    const iterator: SagaIterator = fetchUsers();
    const read = JSON.stringify(call(mainService.read.bind(mainService)));
    const success = JSON.stringify(put(getUsersAsync.success(undefined as Users)));

    expect(JSON.stringify(iterator.next().value)).toEqual(read);
    expect(JSON.stringify(iterator.next().value)).toEqual(success);
    expect(iterator.next().done).toBeTruthy();
  });

  it('+++ error fetchUsers', () => {
    const iterator: SagaIterator = fetchUsers();
    const errorMessage = 'Test error';
    const error = JSON.stringify(put(getUsersAsync.failure(errorMessage)));

    iterator.next();
    expect(JSON.stringify(iterator.throw(errorMessage).value)).toEqual(error);
  });
});
