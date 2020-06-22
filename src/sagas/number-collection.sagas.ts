import {
    call, put, takeEvery, PutEffect, CallEffect, ForkEffect,
} from 'redux-saga/effects';
import { generateNewNumber } from '../api';
import { numberRequestCompletedAction } from '../actions';
import { actionIds, BaseAction } from '../common';

export function* requestNewGeneratedNumber(): Iterator<CallEffect<number> | PutEffect<BaseAction>> {
    const generatedNumber = yield call(generateNewNumber);
    yield put(numberRequestCompletedAction(generatedNumber));
}

export function* watchNewGeneratedNumberRequestStart(): Iterator<ForkEffect> {
    yield takeEvery(
        actionIds.GET_NUMBER_REQUEST_START,
        requestNewGeneratedNumber,
    );
}
