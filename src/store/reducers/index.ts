import { combineReducers } from 'redux';
import { numberCollectionReducer } from './test/reducers';

export const rootReducer = combineReducers({
    numberCollectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
