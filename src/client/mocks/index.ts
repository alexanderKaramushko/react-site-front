import configureStore, { MockStoreEnhanced } from 'redux-mock-store';

export function mockStore<T>(initialState: T): MockStoreEnhanced {
  const configureMockStore = configureStore();
  const store = configureMockStore(initialState);

  return store;
}
