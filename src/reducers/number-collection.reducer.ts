import { createReducer } from 'typesafe-actions';
import { NumbersState } from '../actions/numbers/types';
import { NumbersReducerActionTypes } from '../actions/numbers/actions.types';
import { getNumberAsync } from '../actions/numbers/actions';

const initialState: NumbersState = {
    numbers: [],
    numbersError: '',
    numbersLoading: false,
};

export const numbersReducer = createReducer<NumbersState, NumbersReducerActionTypes>(initialState)
    .handleAction(
        getNumberAsync.request,
        (state): NumbersState => ({
            ...state, numbersError: null, numbersLoading: true,
        }),
    )
    .handleAction(
        getNumberAsync.success,
        (state, action): NumbersState => ({
            ...state, numbers: action.payload, numbersError: null, numbersLoading: false,
        }),
    )
    .handleAction(
        getNumberAsync.failure,
        (state, action): NumbersState => ({
            ...state, numbersError: action.payload, numbersLoading: false,
        }),
    );
