// import {
//     call, put, takeEvery, PutEffect, CallEffect, ForkEffect,
// } from 'redux-saga/effects';
// import { generateNewNumber } from '../api';
// import { actionIds } from '../common';

// export function* requestNewGeneratedNumber() {
//     const generatedNumber = yield call(generateNewNumber);
//     yield put(numberRequestCompletedAction(generatedNumber));
// }

// export function* watchNewGeneratedNumberRequestStart(): Generator {
//     yield takeEvery(
//         actionIds.GET_NUMBER_REQUEST_START,
//         requestNewGeneratedNumber,
//     );
// }
