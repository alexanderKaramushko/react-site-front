import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

export function mockStore(initialState: any): MockStoreEnhanced {
    const configureMockStore = configureStore();
    const store = configureMockStore(initialState);

    return store;
}
