import { numberCollectionReducer } from '../reducers/number-collection.reducer';

describe('With snapshots ', () => {
    it('+++ reducer with shapshot', () => {
        const action = {
            payload: 1,
            type: '[1] NumberGenerator async service returned a new number.',
        };

        expect(numberCollectionReducer(undefined, action)).toMatchSnapshot();
    });
});
