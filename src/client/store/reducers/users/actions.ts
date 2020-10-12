import { createAsyncAction } from 'typesafe-actions';
import { USERS_TYPES } from './types';
import { Users } from '../../../models/base/Users';

export const getUsersAsync = createAsyncAction(
    USERS_TYPES.GET_USERS_ASYNC_REQUEST,
    USERS_TYPES.GET_USERS_ASYNC_SUCCESS,
    USERS_TYPES.GET_USERS_ASYNC_FAILURE,
)<null, Users, string>();
