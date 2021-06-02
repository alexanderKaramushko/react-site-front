import { Users } from '@models/base/Users';

export enum USERS_TYPES {
    GET_USERS_ASYNC_REQUEST = 'GET_USERS_ASYNC_REQUEST',
    GET_USERS_ASYNC_SUCCESS = 'GET_USERS_ASYNC_SUCCESS',
    GET_USERS_ASYNC_FAILURE = 'GET_USERS_ASYNC_FAILURE',
}

export type UsersState = {
    users: Users | null;
    usersError: string;
    usersLoading: boolean;
};
