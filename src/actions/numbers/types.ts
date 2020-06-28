export enum NUMBERS_TYPES {
    GET_NUMBER_ASYNC_REQUEST = 'GET_NUMBER_ASYNC_REQUEST',
    GET_NUMBER_ASYNC_SUCCESS = 'GET_NUMBER_ASYNC_REQUEST',
    GET_NUMBER_ASYNC_FAILURE = 'GET_NUMBER_ASYNC_REQUEST',
}

export type NumbersState = {
    numbersLoading: boolean;
    numbersError: string;
    numbers: number[];
};
