// import { numberCollectionReducer } from '../reducers/number-collection.reducer';

// describe('With snapshots ', () => {
//     // TODO: resolve async behaviour
//     it('+++ reducer with shapshot', () => {
//         const action = {
//             payload: 1,
//             type: '[1] NumberGenerator async service returned a new number.',
//         };

//         expect(numberCollectionReducer(undefined, action)).toMatchSnapshot();
//     });

//     it('+++ reducer for GET_NUMBER_REQUEST_COMPLETED', () => {
//         let state = [0];
//         state = numberCollectionReducer(state, {
//             payload: 1,
//             type: '[1] NumberGenerator async service returned a new number.',
//         });
//         expect(state).toEqual([1]);
//     });
// });
