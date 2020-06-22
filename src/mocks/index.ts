import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { RootState } from '../reducers';

export function mockStore(initialState: RootState): MockStoreEnhanced {
    const configureMockStore = configureStore();
    const store = configureMockStore(initialState);

    return store;
}
