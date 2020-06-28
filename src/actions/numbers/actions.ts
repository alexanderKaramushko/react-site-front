import { createAsyncAction } from 'typesafe-actions';
import { NUMBERS_TYPES } from './types';

export const getNumberAsync = createAsyncAction(
    NUMBERS_TYPES.GET_NUMBER_ASYNC_REQUEST,
    NUMBERS_TYPES.GET_NUMBER_ASYNC_SUCCESS,
    NUMBERS_TYPES.GET_NUMBER_ASYNC_FAILURE,
)<null, number[], string>();
