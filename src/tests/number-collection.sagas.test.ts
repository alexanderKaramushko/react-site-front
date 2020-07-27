// import { takeEvery } from 'redux-saga/effects';
// import {
//     watchNewGeneratedNumberRequestStart,
//     requestNewGeneratedNumber,
// } from '../sagas/number-collection.sagas';

// describe('fetchAuthorsFromApi', () => {
//     const genObject = watchNewGeneratedNumberRequestStart();

//     it('should wait for every GET_NUMBER_REQUEST_COMPLETED action and call requestNewGeneratedNumber', () => {
//         expect(genObject.next().value).toEqual(
//             takeEvery(
//                 '[0] Request a new number to the NumberGenerator async service.',
//                 requestNewGeneratedNumber,
//             ),
//         );
//     });

//     it('should be done on next iteration', () => {
//         expect(genObject.next().done).toBeTruthy();
//     });
// });
